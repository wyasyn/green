import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function page({ params: { id } }) {
    async function editBlog(formData) {
        "use server";
        const data = {
            title: formData.get("title"),
            category: formData.get("category"),
            content: formData.get("content"),
            imageUrl: formData.get("imageUrl"),
            description: formData.get("description"),
        };
        await prisma.blog.update({ data, where: { id } });
        redirect("/admin/blog");
    }
    const blog = await prisma.blog.findUnique({ where: { id } });
    return (
        <div className="p-4 lg:mt-[5rem]">
            <h2 className="text-lg font-semibold">Edit Blog</h2>
            <form action={editBlog} className="form">
                <div className="form-grp">
                    <input
                        type="text"
                        name="title"
                        defaultValue={blog?.title}
                    />
                </div>
                <div className="form-grp">
                    <input
                        type="text"
                        name="category"
                        defaultValue={blog?.category}
                    />
                </div>
                <div className="form-grp">
                    <input
                        type="text"
                        name="description"
                        defaultValue={blog?.description}
                    />
                </div>
                <div className="form-grp">
                    <input
                        type="url"
                        name="imageUrl"
                        defaultValue={blog?.imageUrl}
                    />
                </div>
                <div className="form-grp">
                    <textarea
                        type="text"
                        name="content"
                        defaultValue={blog?.content}
                        rows={10}
                    />
                </div>
                <button type="submit">Update Blog</button>
            </form>
        </div>
    );
}
