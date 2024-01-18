"use client";
import { FaLock, FaUser } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ProfilePic from "@/app/ui/components/ProfilePic/ProfilePic";

export default function page() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const signinData = await signIn("credentials", {
            username: formData.username,
            password: formData.password,
            redirect: false,
        });
        if (signinData?.error) {
            toast.error(signinData.error);
        }
        setFormData({
            username: "",
            password: "",
        });
        router.refresh();
        router.push("/admin");
    };
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-base p-7 rounded-lg shadow-md flex items-center justify-center gap-8 flex-col">
                <ProfilePic />
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 items-center justify-center"
                >
                    <div className="input">
                        <label htmlFor="username">
                            <FaUser />
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder="Your username"
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="password">
                            <FaLock />
                        </label>

                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-primary py-2 px-4 rounded-lg text-sm my-5 hover:bg-second transition"
                    >
                        {" "}
                        <MdLogin /> Login
                    </button>
                </form>
            </div>
        </div>
    );
}
