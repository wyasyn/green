import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function page({ params: { id } }) {
    async function editUser(formData) {
        "use server";
        const data = {
            username: formData.get("username"),
            firstname: formData.get("firstname"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
        };
        await prisma.user.update({ data, where: { id } });
        redirect("/admin/users");
    }
    const user = await prisma.user.findUnique({ where: { id } });
    return (
        <div className="p-4 lg:mt-[5rem]">
            <h2 className="text-lg font-semibold">Edit User</h2>
            <form className="form" action={editUser}>
                <div className="form-grp">
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        required
                        defaultValue={user?.username}
                    />
                </div>
                <div className="form-grp">
                    <label htmlFor="firstname">First name:</label>
                    <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        defaultValue={user?.firstname}
                        required
                    />
                </div>
                <div className="form-grp">
                    <label htmlFor="lastname">Last name:</label>
                    <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        defaultValue={user?.lastname}
                        required
                    />
                </div>
                <div className="form-grp">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        required
                    />
                </div>

                <button className="btn-c" type="submit">
                    Update User
                </button>
            </form>
        </div>
    );
}
