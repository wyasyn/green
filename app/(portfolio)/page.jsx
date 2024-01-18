import Blogs from "../ui/components/Blogs/Blogs";
import Hero from "../ui/components/Hero/Hero";
import HomeAbout from "../ui/components/HomeAbout/HomeAbout";
import Projects from "../ui/components/Projects/Projects";
import Testimonials from "../ui/components/Testimonials/Testimonials";

export default async function Home() {
    return (
        <>
            <Hero />
            <HomeAbout />
            <Projects />
            <Testimonials />
            <Blogs />
        </>
    );
}
