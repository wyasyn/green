"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ url, icon, name }) {
    const pathname = usePathname();
    const isActive = pathname === url;
    return (
        <li>
            <Link
                className={`nav-item group hover:text-slate-400 relative ${
                    isActive && "active"
                }`}
                href={url}
            >
                <small className=" absolute top-[-1.8rem] left-[50%] translate-x-[-50%] text-sm bg-logod px-3 rounded-2xl text-white hidden group-hover:block">
                    {name}
                </small>
                {icon}
            </Link>
        </li>
    );
}
