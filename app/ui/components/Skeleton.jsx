import React from "react";

export default function Skeleton() {
    return (
        <div className=" wrapper ">
            <div className=" flex flex-col gap-8 lg:gap-[5rem] lg:flex-row ">
                <div className=" aspect-[3/2] md:aspect-[2/3] bg-slate-700 animate-pulse w-full max-w-screen-sm rounded-lg " />
                <div className=" flex flex-col gap-2 w-full pt-8">
                    <div className="bg-slate-700 animate-pulse w-full max-w-screen-sm rounded-lg h-4" />
                    <div className="bg-slate-700 animate-pulse w-full max-w-screen-sm rounded-lg h-4" />
                    <div className="bg-slate-700 animate-pulse w-1/2 max-w-screen-sm rounded-lg h-4" />
                </div>
            </div>
        </div>
    );
}
