import Link from "next/link";
import { aboutInfor } from "../../constants/data";

export default function HomeAbout() {
    return (
        <section className=" bg-base pt-[5rem] pb-[3rem] md:pt-[10rem] lg:pb-[7rem] ">
            <div className="wrapper flex flex-col gap-8 lg:justify-between items-center lg:flex-row">
                <p className=" max-w-prose ">{aboutInfor.describe}</p>
                <Link
                    className=" flex items-center gap-4 py-[8px] px-[18px] btn hover:bg-primary transition-all text-sm justify-center "
                    href="/about"
                >
                    More about me
                </Link>
            </div>
        </section>
    );
}
