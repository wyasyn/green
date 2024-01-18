"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function AddUser() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        firstname: "",
        lastname: "",
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            axios
                .post("/api/user", formData)
                .then((res) => {
                    setFormData({
                        email: "",
                        firstname: "",
                        lastname: "",
                        username: "",
                        password: "",
                    });
                    router.refresh();
                    toast.success(res.data.message);
                    setOpen(false);
                })
                .catch((err) => {
                    toast.error(err);
                });
        } catch (error) {
            toast.error(error);
        }
    };
    return (
        <div>
            <button
                className="bg-primary py-1 px-2 rounded-md flex items-center gap-2 text-sm"
                onClick={() => {
                    setOpen(true);
                }}
            >
                <FaPlus /> Add User
            </button>
            {open && (
                <>
                    <div className="overlay" />
                    <div className="fixed z-[999] top-[50%] left-[50%] p-10 translate-x-[-50%] translate-y-[-50%] ">
                        <div className="bg-base p-5 shadow-md rounded-md">
                            <h2 className="flex items-center justify-between gap-4 ">
                                <span className="text-lg font-semibold">
                                    Add User
                                </span>
                                <button
                                    className="text-lg"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <MdClose />
                                </button>
                            </h2>
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-5 w-full">
                                    <div className="form-grp">
                                        <label htmlFor="username">
                                            Username:
                                        </label>
                                        <input
                                            id="username"
                                            type="text"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-grp">
                                        <label htmlFor="firstname">
                                            First name:
                                        </label>
                                        <input
                                            id="firstname"
                                            type="text"
                                            name="firstname"
                                            value={formData.firstname}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-grp">
                                        <label htmlFor="lastname">
                                            Last name:
                                        </label>
                                        <input
                                            id="lastname"
                                            type="text"
                                            name="lastname"
                                            value={formData.lastname}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-grp">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-grp">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <button className="btn-c" type="submit">
                                    Add User
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
