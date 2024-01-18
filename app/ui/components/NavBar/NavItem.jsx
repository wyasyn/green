"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ url, icon, name }) {
    const pathname = usePathname();
    const isActive = pathname === url;
    return (
        <li>
            <Link
                className={isActive ? "nav-item active" : "nav-item"}
                title={name}
                href={url}
            >
                {icon}
            </Link>
        </li>
    );
}
