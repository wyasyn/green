"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashItem({ url, icon, name }) {
    const pathname = usePathname();
    const isActive = pathname === url;
    return (
        <Link
            className={`lg:text-lg group item ${
                isActive ? "active" : "text-slate-300"
            }`}
            href={url}
        >
            <small className=" text-sm absolute top-[-1.5rem] lg:top-[50%] bg-logod text-slate-100 px-3 rounded-2xl left-[50%] translate-x-[-50%] hidden group-hover:block lg:left-auto lg:translate-x-0 lg:translate-y-[-50%] lg:right-[-6rem] ">
                {name}
            </small>
            {icon}
        </Link>
    );
}
