import { skillsData } from "../../constants/data";

export default function AboutSkills() {
    return (
        <section className=" py-[5rem] lg:py-[10rem] ">
            <div className="wrapper">
                <h2 className=" text-3xl recoleta font-semibold ">Skills.</h2>
                <div className=" mt-[3rem] lg:mt-[5rem] grid gap-8">
                    {skillsData.map((item) => (
                        <article
                            key={item.skill}
                            className=" flex flex-col gap-4 "
                        >
                            <h3>{item.skill}</h3>
                            <div className=" bg-slate-400 w-full h-2 rounded-lg">
                                <div
                                    style={{ width: `${item.percent}%` }}
                                    className=" bg-green-700 h-2 rounded-lg"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
