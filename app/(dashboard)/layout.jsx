import "@/app/ui/globals.scss";
import AdminNav from "../ui/components/AdminNav/AdminNav";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
export const metadata = {
    title: "Dashboard",
    description: "Yasyn's dashboard",
};

export default async function RootLayout({ children }) {
    const session = await getServerSession(authOptions);
    if (session?.user) {
        return (
            <html lang="en">
                <body className="bg-second min-h-[100dvh] text-tt flex flex-col gap-5 lg:gap-20 lg:flex-row">
                    <AdminNav />
                    <main className="flex-1 lg:ml-[10rem]">{children}</main>
                    <Toaster position="top right" />
                </body>
            </html>
        );
    } else {
        redirect("/login");
    }
}
