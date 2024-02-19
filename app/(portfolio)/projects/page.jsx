import DynamicImage from "@/app/ui/components/DynamicImage/DynamicImage";
import PaginationBar from "@/app/ui/components/PaginationBar/PaginationBar";
import Priority from "@/app/ui/components/Priority/Priority";
import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

export const metadata = {
    title: "My Projects - Yasin Walum - Web developer",
};

export default async function page({ searchParams: { page = "1" } }) {
    const currentPage = parseInt(page);
    const pageSize = 6;
    const heroItemCount = 1;
    const totalItemsCount = await prisma.project.count();
    const totalPages = Math.ceil((totalItemsCount - heroItemCount) / pageSize);
    const projects = await prisma.project.findMany({
        orderBy: {
            createdAt: "desc",
        },
        skip:
            (currentPage - 1) * pageSize +
            (currentPage === 1 ? 0 : heroItemCount),
        take: pageSize + (currentPage === 1 ? heroItemCount : 0),
    });
    const featured = projects[0];
    const res = currentPage === 1 ? projects.slice(1) : projects;
    const isNep =
        Date.now() - new Date(featured?.createdAt).getTime() <
        1000 * 60 * 60 * 24;

    return (
        <main className="pb-[10rem]">
            {projects.length === 0 ? (
                <div className=" h-screen text-center mx-auto flex items-center justify-center ">
                    <p className=" text-red-500 ">
                        No Projects in the database!
                    </p>
                </div>
            ) : (
                <>
                    {currentPage === 1 && (
                        <div className=" mt-4 lg:mt-[7rem] wrapper">
                            <div className=" flex flex-col lg:flex-row gap-12 lg:gap-[5rem]">
                                <div className=" lg:max-w-[500px] aspect-[3/2] overflow-hidden rounded-md ">
                                    <Priority src={featured?.imageUrl} />
                                </div>
                                <div>
                                    <div className=" text-xs flex items-center gap-8 ">
                                        <div className=" bg-primary w-fit py-1 px-4 rounded-md ">
                                            {featured?.category}
                                        </div>
                                        {isNep && (
                                            <div className=" bg-main w-fit py-1 px-4 rounded-md  ">
                                                New
                                            </div>
                                        )}
                                    </div>

                                    <h2 className=" my-5 font-bold text-xl recoleta">
                                        {featured?.title}
                                    </h2>
                                    <p className=" max-w-prose ">
                                        {featured?.description}
                                    </p>
                                    <Link
                                        className=" py-1 px-4 bg-slate-400 rounded-md block mt-8 w-fit hover:bg-main transition-all text-xs "
                                        href={`projects/${featured?.id}`}
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="wrapper grid gap-[3rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-[7rem]">
                        {res.map((item, idx) => {
                            return (
                                <Link
                                    href={`projects/${item.id}`}
                                    key={item.id}
                                    className="project-card relative aspect-[3/2] lg:aspect-[16/9] overflow-clip rounded-lg w-full"
                                >
                                    <div className=" absolute inset-0 ">
                                        <DynamicImage src={item.imageUrl} />
                                    </div>
                                    <div className=" transition-all absolute top-0 right-4 z-20 text-7xl font-bold recoleta num">
                                        {idx < 8 ? `0${idx + 2}` : `${idx + 2}`}
                                    </div>
                                    <div className=" pro absolute z-10 inset-0 flex flex-col justify-end p-4 transition-all">
                                        <h3 className=" text-lg font-semibold recoleta my-3 ">
                                            {item.title}
                                        </h3>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    {totalPages > 1 && (
                        <PaginationBar
                            currentPage={currentPage}
                            totalPages={totalPages}
                        />
                    )}
                </>
            )}
        </main>
    );
}
