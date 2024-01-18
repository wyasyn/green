"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function AddBlog() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        content: "",
        imageUrl: "",
        description: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            axios
                .post("/api/blog", formData)
                .then((res) => {
                    setFormData({
                        title: "",
                        category: "",
                        content: "",
                        imageUrl: "",
                        description: "",
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
                <FaPlus /> Add Blog
            </button>
            {open && (
                <>
                    <div className="overlay" />
                    <div className="fixed z-[999] top-[50%] left-[50%] p-10 translate-x-[-50%] translate-y-[-50%] ">
                        <div className="bg-base p-5 shadow-md rounded-md">
                            <h2 className="flex items-center justify-between gap-4 ">
                                <span className="text-lg font-semibold">
                                    Add Blog
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
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder="Title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-grp">
                                        <input
                                            type="text"
                                            name="category"
                                            placeholder="Category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-grp">
                                        <input
                                            type="text"
                                            name="description"
                                            placeholder="Description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-grp">
                                        <input
                                            type="url"
                                            name="imageUrl"
                                            placeholder="Image URL"
                                            value={formData.imageUrl}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-grp">
                                    <textarea
                                        type="text"
                                        name="content"
                                        rows={10}
                                        placeholder="Blog Content"
                                        value={formData.content}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <button className="btn-c" type="submit">
                                    Add Blog
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
