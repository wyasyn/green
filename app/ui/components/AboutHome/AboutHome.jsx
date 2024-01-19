import Image from "next/image";
import { images } from "../../images";
import { aboutInfor, socialsdata } from "../../constants/data";
import Link from "next/link";

export default function AboutHome() {
    return (
        <section>
            <div className="wrapper flex flex-col gap-[3rem] lg:gap-[5rem] lg:flex-row py-[5rem] lg:py-[10rem]">
                <div>
                    <div className=" bg-primary clip rounded-2xl ">
                        <Image
                            src={images.black}
                            alt="black me"
                            width={600}
                            height={800}
                            priority
                            placeholder="blur"
                        />
                    </div>
                </div>
                <div className=" lg:pt-8 ">
                    <small className=" text-lg text-primary font-semibold ">
                        {aboutInfor.intro}
                    </small>
                    <h1 className=" mt-2 mb-4 recoleta text-3xl font-semibold">
                        Yasin <span className=" text-main ">W</span>alum
                    </h1>
                    <p className=" max-w-[60ch] ">{aboutInfor.describe}</p>
                    <div className=" mt-[5rem] flex items-center gap-[3rem] lg:gap-[5rem] ">
                        {socialsdata.slice(0, 4).map((item) => (
                            <Link
                                className=" text-2xl hover:text-white text-slate-400 transition-all "
                                href={item.url}
                                key={item.name}
                            >
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                    <div className=" mt-5 h-1 w-full sec-gradient " />
                </div>
            </div>
        </section>
    );
}
