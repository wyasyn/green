import AddUser from "@/app/ui/components/AddUser/AddUser";
import DeleteUserBtn from "@/app/ui/components/DeleteUserBtn/DeleteUserBtn";
import { getUsers } from "@/app/ui/getData";
import Link from "next/link";
import { MdEdit } from "react-icons/md";

export default async function page() {
    const users = await getUsers();
    return (
        <section className="p-4 max-w-screen-lg lg:mt-10">
            <div className="flex align-middle justify-between">
                <h2 className="font-semibold text-lg">Users</h2>
                <AddUser />
            </div>
            <div className="mt-[5rem]">
                {users && (
                    <table className="rounded-md">
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.firstname}</td>
                                    <td className="row-btns">
                                        <Link
                                            className="bg-primary py-2 px-4 rounded-md flex text-xl text-white"
                                            href={`http://localhost:3000/admin/users/edit/${user.id}`}
                                            title="Edit User"
                                        >
                                            <MdEdit />
                                        </Link>
                                        <DeleteUserBtn user_id={user.id} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {users.length === 0 && (
                    <div className="col-span-full text-center max-w-prose ">
                        {"You don't have any users yet!."}
                    </div>
                )}
            </div>
        </section>
    );
}
