import Link from "next/link";

export default function PaginationBar({ currentPage, totalPages, level }) {
    const maxPage = Math.min(totalPages, Math.max(currentPage + 2, 5));
    const minPage = Math.max(1, Math.min(currentPage - 2, maxPage - 4));

    const numberedPageItems = [];
    for (let page = minPage; page <= maxPage; page++) {
        numberedPageItems.push(
            <Link
                href={level + "/?page=" + page}
                key={page}
                className={` py-2 px-4 bg-base text-slate-400 hover:bg-slate-500 transition-all ${
                    currentPage === page
                        ? " pointer-events-none bg-primary "
                        : ""
                } `}
            >
                {page}
            </Link>
        );
    }
    return (
        <div className="flex items-center justify-center mb-[7rem]">
            <div className="flex items-center justify-center rounded overflow-clip">
                {numberedPageItems}
            </div>
        </div>
    );
}
