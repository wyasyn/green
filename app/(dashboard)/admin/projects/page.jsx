import AddProject from "@/app/ui/components/AddProject/AddProject";
import DeleteProjectBtn from "@/app/ui/components/DeleteProjectBtn/DeleteProjectBtn";
import { getProjects } from "@/app/ui/getData";
import Link from "next/link";
import { MdEdit } from "react-icons/md";

export default async function page() {
    const projects = await getProjects();
    return (
        <div className="p-4 max-w-screen-lg lg:mt-10">
            <div className="flex align-middle justify-between">
                <h2 className="font-semibold text-lg">Projects</h2>
                <AddProject />
            </div>
            <div className="mt-[5rem]">
                {projects && (
                    <table className="rounded-md">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project.id}>
                                    <td>{project.title}</td>
                                    <td className="row-btns">
                                        <Link
                                            className="bg-primary py-2 px-4 rounded-md flex text-xl text-white"
                                            href={`/admin/projects/edit/${project.id}`}
                                            title="Edit Project"
                                        >
                                            <MdEdit className="hover:-rotate-45 transition-all " />
                                        </Link>
                                        <DeleteProjectBtn
                                            project_id={project.id}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {projects.length === 0 && (
                    <div className="col-span-full text-center max-w-prose ">
                        {"You don't have any projects yet!."}
                    </div>
                )}
            </div>
        </div>
    );
}
