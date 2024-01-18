"use client";

import { useState } from "react";
import { testimonialsData } from "../../constants/data";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Image from "next/image";
import { BsCircle, BsStopCircle } from "react-icons/bs";

export default function Testimonials() {
    const [slideIndex, setSlideIndex] = useState(0);
    function showNext() {
        setSlideIndex((index) => {
            if (index === testimonialsData.length - 1) return 0;
            return index + 1;
        });
    }
    function showPrev() {
        setSlideIndex((index) => {
            if (index === 0) return testimonialsData.length - 1;
            return index - 1;
        });
    }
    return (
        <section className="py-[7rem] bg-base">
            <div className="wrapper">
                <h2 className=" recoleta text-2xl lg:text-4xl ">
                    Testimonials.
                </h2>
                <div className="max-w-screen-md m-auto mt-[3rem] testimonies">
                    <div
                        style={{
                            translate: `${-100 * slideIndex}%`,
                        }}
                        className="slide-container"
                    >
                        {testimonialsData.map((data) => (
                            <article
                                className="slide bg-second"
                                key={data.name}
                            >
                                <div className="image bg-base">
                                    <Image
                                        src={data.photo}
                                        alt={data.name}
                                        width={100}
                                        height={100}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        placeholder="blur"
                                        title={data.name}
                                    />
                                </div>
                                <div className="info">
                                    <h4 className=" text-sm ">{data.title}</h4>
                                    <h3 className=" text-main recoleta text-lg ">
                                        {data.name}
                                    </h3>
                                    <p className="port-text">{data.comment}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <button
                        onClick={showPrev}
                        className="slider-btn"
                        style={{ left: 0 }}
                        aria-label="View Previous Testimoial"
                    >
                        <BiLeftArrow />
                    </button>
                    <button
                        onClick={showNext}
                        className="slider-btn"
                        style={{ right: 0 }}
                        aria-label="View Next Testimoial"
                    >
                        <BiRightArrow />
                    </button>
                    <div className="pagination">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSlideIndex(index)}
                                aria-label={`View ${index + 1} Testimony`}
                            >
                                {index === slideIndex ? (
                                    <BsStopCircle />
                                ) : (
                                    <BsCircle />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
