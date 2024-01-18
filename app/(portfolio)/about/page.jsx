import AboutHome from "@/app/ui/components/AboutHome/AboutHome";
import AboutServices from "@/app/ui/components/AboutServices/AboutServices";
import AboutSkills from "@/app/ui/components/AboutSkills/AboutSkills";

export const metadata = {
    title: "About Me - Yasin Walum - Web developer",
};
export default function page() {
    return (
        <main>
            <AboutHome />
            <AboutServices />
            <AboutSkills />
        </main>
    );
}
