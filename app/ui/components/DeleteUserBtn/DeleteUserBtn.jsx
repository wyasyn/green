"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export default function DeleteUserBtn({ user_id }) {
    const [de, setDe] = useState(false);
    const router = useRouter();
    const deleteUser = async () => {
        const res = await axios.delete(
            `https://www.ywalum.com/api/user/${user_id}`
        );
        if (res.status == 201) {
            toast.success(res.data.message);
            router.refresh();
        } else {
            toast.error(res.data.message);
        }
    };
    return (
        <>
            <button
                className="bg-red-800 py-2 px-4 rounded-md flex text-xl text-white"
                onClick={() => {
                    setDe(true);
                }}
                title="Delete User"
            >
                <MdDelete className="hover:rotate-45 transition-all " />
            </button>
            {de && (
                <>
                    <div className="overlay" />
                    <div className="fixed z-[991] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-base text-tt p-3 rounded-md flex items-center justify-center gap-7 flex-col">
                        <p className="text-sm text-center">
                            Do you really want to delete this User?
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                            <button
                                className="bg-green-700 p-2 rounded-md text-center"
                                onClick={() => {
                                    setDe(false);
                                }}
                            >
                                No
                            </button>
                            <button
                                className="bg-red-700 p-2 rounded-md text-center"
                                onClick={deleteUser}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
