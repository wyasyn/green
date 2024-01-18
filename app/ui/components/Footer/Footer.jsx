import Link from "next/link";
import { items, socialsdata } from "../../constants/data";
import ProfilePic from "../ProfilePic/ProfilePic";

export default function Footer() {
    return (
        <footer className="bg-base py-[5rem]">
            <div className="wrapper flex flex-col gap-8 items-center justify-center lg:flex-row lg:items-start lg:justify-between">
                <div className="flex flex-col gap-2 text-center items-center">
                    <ProfilePic />
                    <p className=" text-primary text-sm max-w-[25ch] ">
                        Living, Learning, & Leveling up one day at a time.
                    </p>
                </div>

                <div className="">
                    <h3 className=" text-primary recoleta">Pages</h3>
                    <div className="flex flex-col gap-2 text-slate-400 text-sm mt-4 capitalize">
                        {items.map((item) => {
                            return (
                                <Link
                                    key={item.name}
                                    href={item.url}
                                    title={item.name}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="">
                    <h3 className="text-primary recoleta">Contact</h3>
                    <div className="flex flex-col gap-2  text-slate-400 text-sm mt-4 capitalize">
                        {socialsdata.map((item) => (
                            <Link
                                href={item.url}
                                key={item.name}
                                title={item.name}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="text-sm text-slate-400">
                    {new Date().getFullYear()} &copy;
                    <span className="font-semibold ">
                        Yas
                        <span className="text-main">y</span>n
                    </span>
                    . All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
