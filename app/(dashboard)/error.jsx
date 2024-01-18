"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex items-center h-screen justify-center ">
            <div className="flex flex-col gap-5 text-center items-center justify-center">
                <h2>Oops!</h2>
                <p>Oh no Something went wrong!</p>
                <button
                    className="bg-red-700 p-2"
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Try again
                </button>
            </div>
        </div>
    );
}
