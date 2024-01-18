import Link from "next/link";
import React from "react";

export default function Logo() {
    return (
        <Link href="/" className="text-white text-lg font-bold">
            Y<span className="text-main">y</span>
        </Link>
    );
}
