import NavItem from "./NavItem";
import Link from "next/link";
import ProfilePic from "../ProfilePic/ProfilePic";
import { items } from "../../constants/data";

export default function NavBar() {
    return (
        <header className="nav-bar fixed left-1/2 translate-x-[-50%] bottom-4 z-[999] bg-base lg:top-4 lg:bottom-auto">
            <nav>
                <ul className="flex gap-6 lag:gap-8 items-center">
                    <li>
                        <Link href="/">
                            <ProfilePic />
                        </Link>
                    </li>
                    {items.map((item) => (
                        <NavItem
                            key={item.name}
                            url={item.url}
                            icon={item.icon}
                            name={item.name}
                        />
                    ))}
                </ul>
            </nav>
        </header>
    );
}
