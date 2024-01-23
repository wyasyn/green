import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function page() {
    const currentDate = new Date().toLocaleDateString();
    const projectCount = await prisma.project.count();
    const blogCount = await prisma.blog.count();
    const userCount = await prisma.user.count();
    const messageCount = await prisma.message.count();
    const messages = await prisma.message.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    const session = await getServerSession(authOptions);

    const stats = [
        {
            date: currentDate,
            name: "Projects Present",
            content: projectCount,
        },
        {
            date: currentDate,
            name: "Blogs Present",
            content: blogCount,
        },
        {
            date: currentDate,
            name: "Users Present",
            content: userCount,
        },
        {
            date: currentDate,
            name: "Messages Present",
            content: messageCount,
        },
    ];
    return (
        <section className="p-4 lg:mt-[3rem] max-w-screen-lg ">
            <h1 className="text-xl">
                Hi, Welcome back {session?.user.firstname}!
            </h1>
            <div className="my-[3rem] grid gap-[2rem] sm:grid-cols-2 md:grid-cols-4">
                {stats.map((item, idx) => (
                    <article
                        className="bg-card border-m p-5 custom-shadow hover:translate-y-3 transition-all "
                        key={idx}
                    >
                        <small className=" text-icon ">{item.date}</small>
                        <h3 className="my-3 font-semibold text-grey">
                            {item.name}
                        </h3>
                        <p className="text-2xl text-grey">{item.content}</p>
                    </article>
                ))}
            </div>
            <div className="my-[5rem] max-w-screen-lg">
                <h2 className="text-xl">Messages</h2>
                <div className="mt-10 grid gap-[2rem] sm:grid-cols-2 md:grid-cols-4">
                    {messages &&
                        messages.map((item) => (
                            <article
                                key={item.id}
                                className="bg-card p-[1em] border-m custom-shadow hover:translate-y-3 transition-all"
                            >
                                <small className=" text-icon ">
                                    {item.createdAt.toLocaleDateString()}
                                </small>
                                <h3 className="font-bold capitalize text-grey">
                                    {item.sender}
                                </h3>
                                <p className="my-4 text-grey">{item.content}</p>
                                <Link
                                    href={`mailto:${item.contact}`}
                                    className="font-thin hover:font-semibold transition-all duration-300 ease-in-out "
                                >
                                    {item.contact}
                                </Link>
                            </article>
                        ))}
                    {messages.length === 0 && (
                        <div className="col-span-full text-center max-w-prose ">
                            {"You don't have any messages yet!."}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
