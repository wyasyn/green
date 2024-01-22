import React from "react";
import { ServicesData } from "../../constants/data";

export default function AboutServices() {
    return (
        <section className=" bg-base py-[5rem] lg:py-[10rem] ">
            <div className="wrapper">
                <h2 className=" recoleta text-3xl ">Services.</h2>
                <div className=" grid gap-[3rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[5rem] ">
                    {ServicesData.map((item) => (
                        <article
                            key={item.title}
                            className=" flex flex-col items-center text-center rounded-lg bg-card p-4 custom-shadow "
                        >
                            <div className=" text-3xl text-icon">
                                {item.icon}
                            </div>
                            <h3 className=" my-2 font-semibold recoleta text-grey">
                                {item.title}
                            </h3>
                            <p className=" text-sm max-w-[40ch] text-grey">
                                {item.describe}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
