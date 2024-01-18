import ContactForm from "@/app/ui/components/ContactForm/ContactForm";
import Map from "@/app/ui/components/Map/Map";
import { socialsdata } from "@/app/ui/constants/data";
import Link from "next/link";

export const metadata = {
    title: "Contact Me - Yasin Walum - Web developer",
};
export default function page() {
    return (
        <main>
            <section className="wrapper">
                <div className="flex lg:gap-[5rem] shadow-md flex-col gap-[3rem] mt-[7rem] md:flex-row bg-base p-[3rem] rounded-3xl mb-[-5rem] relative z-10">
                    <div className="flex-1 text-md md:pb-12">
                        <ContactForm />
                    </div>
                    <div className="flex-1 md:pt-12 relative">
                        <small className="text-main italic">Contact Me</small>
                        <h1 className="text-2xl font-bold lg:text-3xl">
                            Say Hi 👋!
                        </h1>
                        <p className="mt-8 max-w-[35ch]">
                            I'm excited to learn about your project. ready to
                            get started?
                        </p>
                        <div className="flex gap-8 flex-col mt-10">
                            {socialsdata.slice(0, 4).map((item) => (
                                <Link
                                    className="flex items-center gap-4 capitalize text-lg"
                                    key={item.name}
                                    href={item.url}
                                >
                                    <span className="text-main text-xl">
                                        {item.icon}
                                    </span>{" "}
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="absolute right-0 top-0 flex flex-col items-center h-full mt-10">
                            <div className="w-3 h-3 rounded-full bg-main" />
                            <div className="sm:h-80 h-40 w-1 main-gradient" />
                        </div>
                    </div>
                </div>
            </section>
            <Map />
        </main>
    );
}
