export const revalidate = 0;
import Link from "next/link";
import { getBlogs } from "../../getData";
import DynamicImage from "../DynamicImage/DynamicImage";

export default async function Blogs() {
    const blogs = await getBlogs();
    const featured = blogs.slice(0, 3);
    return (
        <section className="py-[7rem]">
            <div className="wrapper">
                <h2 className=" recoleta text-2xl lg:text-4xl ">
                    Featured Blog.
                </h2>
                <div className="my-[5rem] grid gap-[3rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {featured.length === 0 ? (
                        <div>No blogs</div>
                    ) : (
                        <>
                            {featured.map((blog) => {
                                const isNew =
                                    Date.now() -
                                        new Date(blog.createdAt).getTime() <
                                    1000 * 60 * 60 * 24;
                                return (
                                    <div
                                        className=" rounded-md overflow-clip shadow-md"
                                        key={blog.id}
                                    >
                                        <div className="aspect-[3/2]">
                                            <DynamicImage src={blog.imageUrl} />
                                        </div>
                                        <div className="px-2 py-5 text-xs bg-base">
                                            <div className="flex items-center gap-8">
                                                <div className=" bg-primary w-fit py-1 px-4 rounded-md ">
                                                    {blog.category}
                                                </div>
                                                {isNew && (
                                                    <div className=" bg-main w-fit py-1 px-4 rounded-md  ">
                                                        New
                                                    </div>
                                                )}
                                            </div>
                                            <h3 className="my-4 text-balance">
                                                {blog.title}
                                            </h3>
                                            <Link
                                                className=" py-1 px-4 bg-slate-400 rounded-md block w-fit hover:bg-main transition-all "
                                                href={`blog/${blog.id}`}
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    )}
                </div>
                <div className=" flex items-center justify-center">
                    <Link
                        className=" flex items-center gap-4 py-[8px] px-[18px] btn hover:bg-primary transition-all text-sm justify-center "
                        href="/blog"
                    >
                        More Blogs
                    </Link>
                </div>
            </div>
        </section>
    );
}
