import Priority from "@/app/ui/components/Priority/Priority";
import Skeleton from "@/app/ui/components/Skeleton";
import prisma from "@/lib/prisma";
import Link from "next/link";
import React, { Suspense, cache } from "react";
import { IoBriefcase, IoLogoGithub } from "react-icons/io5";

const getProject = cache(async (id) => {
    const project = await prisma.project.findUnique({ where: { id } });
    return project;
});

export async function generateMetadata({ params: { id } }) {
    const project = await getProject(id);
    return {
        title: project.title + " - Yasin Walum",
        description: project.description,
        openGraph: {
            images: [{ url: project.imageUrl }],
        },
    };
}

export default async function page({ params: { id } }) {
    const project = await getProject(id);
    const isNew =
        Date.now() - new Date(project.createdAt).getTime() <
        1000 * 60 * 60 * 24;
    return (
        <Suspense fallback={<Skeleton />}>
            <div className="wrapper flex flex-col lg:flex-row gap-8 lg:gap-[5rem] lg:mt-[7rem] mb-[10rem]">
                <div className=" rounded-md overflow-hidden lg:max-w-[400px] aspect-[3/2] lg:aspect-[3/4]">
                    <Priority src={project.imageUrl} />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-balance lg:text-4xl recoleta">
                        {project.title}
                    </h1>
                    <div className=" text-xs flex items-center gap-8 my-5">
                        <div className=" bg-primary w-fit py-1 px-4 rounded-md ">
                            {project.category}
                        </div>
                        {isNew && (
                            <div className=" bg-main w-fit py-1 px-4 rounded-md  ">
                                New
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-8 mt-12">
                        <Link
                            className="flex items-center gap-4 bg-base py-1 px-4 rounded-md hover:opacity-75 transition-all"
                            target="_blank "
                            href={project.url}
                        >
                            <IoBriefcase /> View Project
                        </Link>
                        <Link
                            className="bg-base py-1 px-4 rounded-md hover:opacity-75 transition-all flex items-center gap-4"
                            target="_blank "
                            href={project.github}
                        >
                            <IoLogoGithub /> View Code
                        </Link>
                    </div>

                    <p className="mt-6 max-w-prose">{project.description}</p>
                </div>
            </div>
        </Suspense>
    );
}
