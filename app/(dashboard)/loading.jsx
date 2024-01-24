export default function page() {
    return (
        <div className=" wrapper my-[5rem] lg:my-[10rem] ">
            <div className=" flex flex-col gap-8 lg:gap-[5rem] lg:flex-row ">
                <div className=" aspect-[3/2] md:aspect-video bg-slate-700 animate-pulse w-full max-w-screen-sm rounded-lg " />
                <div className=" flex flex-col gap-2 w-full pt-8">
                    <div className="bg-slate-700 animate-pulse w-full max-w-screen-sm rounded-lg h-4" />
                    <div className="bg-slate-700 animate-pulse w-full max-w-screen-sm rounded-lg h-4" />
                    <div className="bg-slate-700 animate-pulse w-1/2 max-w-screen-sm rounded-lg h-4" />
                </div>
            </div>
            <div className=" mt-[7rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-slate-700 animate-pulse w-full max-w-screen-sm rounded-lg aspect-[3/2]  md:aspect-video"
                    />
                ))}
            </div>
        </div>
    );
}
