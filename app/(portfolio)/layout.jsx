import "@/app/ui/globals.scss";
import NavBar from "../ui/components/NavBar/NavBar";
import Footer from "../ui/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
    title: "Yasin Walum - Web Developer",
    description: "Computer Scientist",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-second text-tt ">
                <NavBar />
                {children}
                <Footer />
                <Toaster position="top right" />
            </body>
        </html>
    );
}
