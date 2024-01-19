import Link from "next/link";
import React from "react";
import { getProjects } from "../../getData";
import DynamicImage from "../DynamicImage/DynamicImage";
import { IoLogoGithub } from "react-icons/io5";
import { unstable_noStore } from "next/cache";

export default async function Projects() {
    unstable_noStore();
    const selected = await getProjects();
    const selectedProjects = selected.slice(0, 3);
    return (
        <section className=" py-[7rem] ">
            <div className="wrapper">
                <h2 className=" recoleta text-2xl lg:text-4xl ">
                    Selected Projects.
                </h2>
                <div className=" my-[5rem] grid gap-[3rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {selected.length === 0 ? (
                        <div className=" text-2xl text-center ">
                            {" "}
                            No Projects to display{" "}
                        </div>
                    ) : (
                        <>
                            {selectedProjects.map((item, idx) => {
                                return (
                                    <article
                                        key={item.id}
                                        className="project-card relative aspect-[3/2] lg:aspect-[16/9] overflow-clip rounded-lg"
                                    >
                                        <div className=" absolute inset-0 ">
                                            <DynamicImage src={item.imageUrl} />
                                        </div>
                                        <div className=" transition-all absolute top-0 right-4 z-20 text-7xl font-bold recoleta num">
                                            0{idx + 1}
                                        </div>
                                        <div className=" pro absolute z-10 inset-0 flex flex-col justify-end p-4 transition-all">
                                            <h3 className=" text-lg font-semibold recoleta my-3 ">
                                                {item.title}
                                            </h3>
                                            <div className=" flex items-center gap-4">
                                                <Link
                                                    href={item.github}
                                                    className=" text-2xl "
                                                >
                                                    <IoLogoGithub />
                                                </Link>
                                                <Link
                                                    className=" py-1 px-4 bg-slate-400 rounded-md block w-fit hover:bg-main transition-all text-xs "
                                                    href={`projects/${item.id}`}
                                                >
                                                    Details
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </>
                    )}
                </div>
                <div className=" flex items-center justify-center">
                    <Link
                        className=" flex items-center gap-4 py-[8px] px-[18px] btn hover:bg-primary transition-all text-sm justify-center "
                        href="/projects"
                    >
                        More Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
