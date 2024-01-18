"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashItem({ url, icon, name }) {
    const pathname = usePathname();
    const isActive = pathname === url;
    return (
        <Link
            className={`lg:text-lg ${
                isActive ? "item active" : "item text-slate-300"
            }`}
            title={name}
            href={url}
        >
            {icon}
        </Link>
    );
}
