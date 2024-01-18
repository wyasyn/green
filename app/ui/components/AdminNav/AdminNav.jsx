import Link from "next/link";
import { MdDashboard, MdHome } from "react-icons/md";
import { IoBriefcase } from "react-icons/io5";
import { FaBlog, FaUserAlt } from "react-icons/fa";
import SignOut from "../SignOut/SignOut";
import DashItem from "./DashItem";

const links = [
    {
        name: "Dashborad",
        url: "/admin",
        icon: <MdDashboard />,
    },
    {
        name: "Projects",
        url: "/admin/projects",
        icon: <IoBriefcase />,
    },
    {
        name: "Blog",
        url: "/admin/blog",
        icon: <FaBlog />,
    },
    {
        name: "Users",
        url: "/admin/users",
        icon: <FaUserAlt />,
    },
];

export default function AdminNav() {
    return (
        <div className="bg-base flex justify-between fixed w-screen lg:w-auto lg:top-0 bottom-0 left-0 lg:flex-col z-50">
            <Link
                title="Home"
                className="lg:text-lg text-slate-300 p-[0.65rem]"
                href="/"
            >
                <MdHome />
            </Link>
            <div className="flex lg:flex-col ">
                {links.map((item) => (
                    <DashItem
                        key={item.name}
                        name={item.name}
                        icon={item.icon}
                        url={item.url}
                    />
                ))}
            </div>
            <SignOut />
        </div>
    );
}
