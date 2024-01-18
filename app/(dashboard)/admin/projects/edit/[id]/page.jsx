import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function page({ params: { id } }) {
    async function editProject(formData) {
        "use server";
        const data = {
            title: formData.get("title"),
            category: formData.get("category"),
            url: formData.get("url"),
            github: formData.get("github"),
            imageUrl: formData.get("imageUrl"),
            description: formData.get("description"),
        };
        await prisma.project.update({ data, where: { id } });
        redirect("/admin/projects");
    }
    const project = await prisma.project.findUnique({ where: { id } });
    return (
        <div className="p-4 lg:mt-[5rem]">
            <h2 className="text-lg font-semibold">Edit Project</h2>
            <form action={editProject} className="form">
                <div className="form-grp">
                    <input
                        type="text"
                        name="title"
                        defaultValue={project?.title}
                    />
                </div>
                <div className="form-grp">
                    <input
                        type="text"
                        name="category"
                        defaultValue={project?.category}
                    />
                </div>
                <div className="form-grp">
                    <input type="url" name="url" defaultValue={project?.url} />
                </div>
                <div className="form-grp">
                    <input
                        type="url"
                        name="github"
                        defaultValue={project?.github}
                    />
                </div>
                <div className="form-grp">
                    <input
                        type="url"
                        name="imageUrl"
                        defaultValue={project?.imageUrl}
                    />
                </div>
                <div className="form-grp">
                    <textarea
                        type="text"
                        name="description"
                        defaultValue={project?.description}
                        rows={10}
                    />
                </div>
                <button type="submit">Update Project</button>
            </form>
        </div>
    );
}
