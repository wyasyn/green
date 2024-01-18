"use client";
import { MdLogout } from "react-icons/md";
import { signOut } from "next-auth/react";

export default function SignOut() {
    return (
        <button
            title="Log out"
            className="lg:text-lg text-slate-300 p-[0.65em]"
            onClick={() => {
                signOut({
                    redirect: true,
                    callbackUrl: `${window.location.origin}/login`,
                });
            }}
        >
            <MdLogout />
        </button>
    );
}
