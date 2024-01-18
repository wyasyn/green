import AddBlog from "@/app/ui/components/AddBlog/AddBlog";
import DeleteBlogBtn from "@/app/ui/components/DeleteBlogBtn/DeleteBlogBtn";
import { getBlogs } from "@/app/ui/getData";
import Link from "next/link";
import { MdEdit } from "react-icons/md";

export default async function page() {
    const blogs = await getBlogs();
    return (
        <div className="p-4 max-w-screen-lg lg:mt-10">
            <div className="flex align-middle justify-between">
                <h2 className="font-semibold text-lg ">Blog</h2>
                <AddBlog />
            </div>
            <div className="mt-[5rem]">
                {blogs && (
                    <table className="rounded-md">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td>{blog.title}</td>
                                    <td className="row-btns">
                                        <Link
                                            className="bg-primary py-2 px-4 rounded-md flex text-xl text-white"
                                            href={`/admin/blog/edit/${blog.id}`}
                                            title="Edit Blog"
                                        >
                                            <MdEdit />
                                        </Link>
                                        <DeleteBlogBtn blog_id={blog.id} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {blogs.length === 0 && (
                    <div className="col-span-full text-center max-w-prose ">
                        {"You don't have any blogs yet!."}
                    </div>
                )}
            </div>
        </div>
    );
}
