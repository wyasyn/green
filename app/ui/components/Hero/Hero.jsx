import Link from "next/link";
import { MdDownload, MdMail } from "react-icons/md";
import { ServicesData, socialsdata } from "../../constants/data";
import Image from "next/image";
import { images } from "../../images";

export default function Hero() {
    return (
        <div>
            <div className="wrapper my-[3rem] lg:mt-[12rem] flex flex-col-reverse items-center text-center lg:items-start lg:text-left lg:flex-row gap-[3rem] lg:gap-[7rem]">
                <div>
                    <small className="text-sm ">
                        {" "}
                        <span className=" text-xl ">👋</span>, my name is
                    </small>
                    <h1 className=" text-5xl font-bold text-white mt-4 lg:text-7xl recoleta">
                        Yasin <span className=" text-main ">W</span>alum.
                    </h1>
                    <div className="text-4xl font-bold text-slate-400 mb-8">
                        I build things for the web.
                    </div>
                    <p className=" max-w-[50ch] ">
                        I specialize in building (and occasioanlly designing)
                        exceptional digital experiences. I'm focused on building
                        accessible, human-centered products.
                    </p>
                    <div className=" flex items-center gap-12 mt-[3rem] capitalize justify-center lg:justify-start">
                        <Link
                            className=" flex items-center gap-4 py-[8px] px-[18px] btn hover:bg-primary transition-all text-sm"
                            href="/contact"
                        >
                            <MdMail />{" "}
                            <span className="btn-x ">Get In touch</span>
                        </Link>
                        <Link
                            className="flex py-[8px] px-[18px] items-center gap-4 btn hover:bg-primary transition-all text-sm"
                            href="/assets/resume.pdf"
                            download="resume.pdf"
                        >
                            <MdDownload />{" "}
                            <span className="btn-x ">download CV</span>
                        </Link>
                    </div>
                    <div className=" bg-second p-4 rounded-lg lg:bg-inherit lg:p-0 lg:rounded-none flex items-center gap-8 mt-[3rem] lg:fixed lg:bottom-0 lg:left-8 lg:z-20 lg:flex-col lg:m-0 text-slate-400 lg:gap-[1.5rem]">
                        {socialsdata.slice(0, 4).map((item) => (
                            <Link href={item.url} key={item.name}>
                                {item.icon}
                            </Link>
                        ))}
                        <div className=" h-[1px] w-full bg-tt lg:w-[1px] lg:h-[50px]" />
                    </div>
                </div>
                <div className=" flex items-center justify-center">
                    <div>
                        <Image
                            src={images.yellow}
                            width={300}
                            height={600}
                            alt="hero pic"
                            priority
                            placeholder="blur"
                            className=" w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="wrapper mb-[-4rem]">
                <div className="hidden md:grid gap-8 grid-cols-3 ">
                    {ServicesData.slice(0, 3).map((item) => (
                        <article
                            key={item.title}
                            className=" serv p-4 bg-card text-base shadow-md flex flex-col items-center text-center gap-2 hover:bg-main transition-all"
                        >
                            <div className=" text-2xl text-primary">
                                {item.icon}
                            </div>
                            <h3 className=" font-semibold ">{item.title}</h3>
                            <p className=" text-sm ">{item.describe}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
