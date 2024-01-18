import DynamicImage from "@/app/ui/components/DynamicImage/DynamicImage";
import PaginationBar from "@/app/ui/components/PaginationBar/PaginationBar";
import Priority from "@/app/ui/components/Priority/Priority";
import prisma from "@/lib/prisma";
import Link from "next/link";

export const metadata = {
    title: "My Blog - Yasin Walum - Web developer",
};

export default async function page({ searchParams: { page = "1" } }) {
    const currentPage = parseInt(page);
    const pageSize = 6;
    const heroItemCount = 1;
    const totalItemsCount = await prisma.blog.count();
    const totalPages = Math.ceil((totalItemsCount - heroItemCount) / pageSize);
    const blogs = await prisma.blog.findMany({
        orderBy: {
            createdAt: "desc",
        },
        skip:
            (currentPage - 1) * pageSize +
            (currentPage === 1 ? 0 : heroItemCount),
        take: pageSize + (currentPage === 1 ? heroItemCount : 0),
    });
    const featured = blogs[0];
    const res = currentPage === 1 ? blogs.slice(1) : blogs;
    const isNep =
        Date.now() - new Date(featured?.createdAt).getTime() <
        1000 * 60 * 60 * 24;
    return (
        <main>
            <div className="wrapper mt-4 lg:mt-[7rem] lg:mb-[10rem]">
                {blogs.length === 0 ? (
                    <div className=" h-screen text-center mx-auto flex items-center justify-center ">
                        <p className=" text-red-500 ">
                            No blogs in the database!
                        </p>
                    </div>
                ) : (
                    <>
                        {currentPage === 1 && (
                            <div className=" flex flex-col lg:flex-row gap-12 lg:gap-[5rem]">
                                <div className=" lg:max-w-[500px] aspect-[3/2] overflow-hidden rounded-md ">
                                    <Priority src={featured.imageUrl} />
                                </div>
                                <div>
                                    <div className=" text-xs flex items-center gap-8 ">
                                        <div className=" bg-primary w-fit py-1 px-4 rounded-md ">
                                            {featured.category}
                                        </div>
                                        {isNep && (
                                            <div className=" bg-main w-fit py-1 px-4 rounded-md  ">
                                                New
                                            </div>
                                        )}
                                    </div>

                                    <h2 className=" my-5 font-bold text-xl recoleta">
                                        {featured.title}
                                    </h2>
                                    <p className=" max-w-prose ">
                                        {featured.description}
                                    </p>
                                    <Link
                                        className=" py-1 px-4 bg-slate-400 rounded-md block mt-8 w-fit hover:bg-main transition-all text-xs "
                                        href={`blog/${featured.id}`}
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-[5rem] lg:mt-[7rem] mb-[7rem]">
                            {res.map((blog) => {
                                const isNew =
                                    Date.now() -
                                        new Date(blog.createdAt).getTime() <
                                    1000 * 60 * 60 * 24;
                                return (
                                    <div
                                        className=" rounded-md overflow-clip shadow-md"
                                        key={blog.id}
                                    >
                                        <div className="aspect-[3/2]">
                                            <DynamicImage src={blog.imageUrl} />
                                        </div>
                                        <div className="px-2 py-5 text-xs bg-base">
                                            <div className="flex items-center gap-8">
                                                <div className=" bg-primary w-fit py-1 px-4 rounded-md ">
                                                    {blog.category}
                                                </div>
                                                {isNew && (
                                                    <div className=" bg-main w-fit py-1 px-4 rounded-md  ">
                                                        New
                                                    </div>
                                                )}
                                            </div>
                                            <h3 className="my-4 text-balance">
                                                {blog.title}
                                            </h3>
                                            <Link
                                                className=" py-1 px-4 bg-slate-400 rounded-md block w-fit hover:bg-main transition-all "
                                                href={`blog/${blog.id}`}
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {totalPages > 1 && (
                            <PaginationBar
                                level="blog"
                                currentPage={currentPage}
                                totalPages={totalPages}
                            />
                        )}
                    </>
                )}
            </div>
        </main>
    );
}
