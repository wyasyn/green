import "@/app/ui/globals.scss";
import { Toaster } from "react-hot-toast";
export const metadata = {
    title: "Login",
    description: "Log in to yasyn's world",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-second text-tt ">
                {children}
                <Toaster position="top right" />
            </body>
        </html>
    );
}
