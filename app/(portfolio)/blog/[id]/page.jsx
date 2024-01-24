import Priority from "@/app/ui/components/Priority/Priority";
import Skeleton from "@/app/ui/components/Skeleton";
import prisma from "@/lib/prisma";
import React, { Suspense, cache } from "react";

const getBlog = cache(async (id) => {
    const blog = await prisma.blog.findUnique({ where: { id } });
    return blog;
});

export async function generateMetadata({ params: { id } }) {
    const blog = await getBlog(id);
    return {
        title: blog.title + " - Yasin Walum",
        description: blog.description,
        openGraph: {
            images: [{ url: blog.imageUrl }],
        },
    };
}

export default async function page({ params: { id } }) {
    const blog = await getBlog(id);
    const isNew =
        Date.now() - new Date(blog.createdAt).getTime() < 1000 * 60 * 60 * 24;
    return (
        <Suspense fallback={<Skeleton />}>
            <div className="wrapper flex flex-col lg:flex-row gap-8 lg:gap-[5rem] lg:mt-[7rem] mb-[10rem]">
                <div className="rounded-md overflow-hidden lg:max-w-[400px] aspect-[3/2] lg:aspect-[3/4] w-full ">
                    <Priority src={blog.imageUrl} />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-balance lg:text-4xl  ">
                        {blog.title}
                    </h1>
                    <div className=" text-xs flex items-center gap-8 my-5">
                        <div className=" bg-primary w-fit py-1 px-4 rounded-md ">
                            {blog.category}
                        </div>
                        {isNew && (
                            <div className=" bg-main w-fit py-1 px-4 rounded-md  ">
                                New
                            </div>
                        )}
                    </div>
                    <h4 className=" font-semibold text-lg max-w-prose ">
                        {blog.description}
                    </h4>
                    <p className="mt-6 max-w-prose">{blog.content}</p>
                </div>
            </div>
        </Suspense>
    );
}
