import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdComputer, MdDashboard, MdGraphicEq, MdMouse } from "react-icons/md";
import { BsDatabase } from "react-icons/bs";
import { images } from "../images";
import { IoHome } from "react-icons/io5";
import { FaBlog, FaBriefcase, FaPhoneAlt, FaUser } from "react-icons/fa";

const myEmail = process.env.MY_EMAIL;
const myPhone = process.env.MY_PHONE;

export const items = [
    {
        name: "Home",
        url: "/",
        icon: <IoHome />,
    },
    {
        name: "About",
        url: "/about",
        icon: <FaUser />,
    },
    {
        name: "Projects",
        url: "/projects",
        icon: <FaBriefcase />,
    },
    {
        name: "Blog",
        url: "/blog",
        icon: <FaBlog />,
    },
    {
        name: "Contact",
        url: "/contact",
        icon: <FaPhoneAlt />,
    },
];

export const socialsdata = [
    {
        name: "github",
        icon: <FaGithub />,
        url: "https://github.com/wyasyn",
    },
    {
        name: "WhatsApp",
        icon: <FaWhatsapp />,
        url: `https://wa.me/${myPhone}`,
    },
    {
        name: "linkedin",
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/yasin-walum-01b18295/",
    },
    {
        name: "Email",
        icon: <FaEnvelope />,
        url: `mailto:${myEmail}`,
    },
    {
        name: "Dashboard",
        icon: <MdDashboard />,
        url: "/admin",
    },
];

export const ServicesData = [
    {
        icon: <MdComputer />,
        title: "Web Development",
        line: "Design, develop",
        describe: "Design, develop, and maintain web applications and systems",
    },
    {
        icon: <MdGraphicEq />,
        title: "Machine Learning",
        line: "Manage, maintain",
        describe: "Manage and maintain computer systems, networks, and servers",
    },
    {
        icon: <BsDatabase />,
        title: "Database",
        line: "Implement, store",
        describe:
            "Design, implement, and maintain databases for storing and retrieving data efficiently",
    },
    {
        icon: <MdMouse />,
        line: "Design, develop",
        title: "Networks, servers",
        describe: "Manage and maintain computer systems, networks, and servers",
    },
];

export const aboutInfor = {
    title: "About Me",
    intro: "Who am I.",
    describe:
        "👋 Hello! I'm, a passionate web developer and data analyst with a love for transforming data into meaningful insights and crafting web experiences that leave a lasting impression. With a blend of creativity and analytical prowess, I bring a unique perspective to every project I undertake.",
};
export const projectInfor = {
    title: "Projects",
    intro: "Selected Projects",
    describe:
        "I am excited to showcase my skills and share my journey as I continue to explore and innovate in the ever-evolving world of front-end development.",
};
export const skillsInfor = {
    title: "My skills",
    intro: "Why choose me.",
    describe:
        "I thrive on transforming ideas and designs into interactive and user-friendly web experiences. From responsive layouts to intuitive user interfaces, I take pride in crafting seamless, visually appealing, and engaging websites.",
};

export const BlogTitle = {
    title: "Insights Unveiled",
    sub: "My Blogs",
    description:
        "Explore captivating insights, practical tips, and personal anecdotes that illuminate the path in web development",
};

export const skillsData = [
    {
        skill: "JavaScript",
        percent: 99,
    },
    {
        skill: "php",
        percent: 85,
    },
    {
        skill: "python",
        percent: 90,
    },
    {
        skill: "css",
        percent: 100,
    },
    {
        skill: "sql",
        percent: 90,
    },
    {
        skill: "node and & it's frameworks",
        percent: 90,
    },
];
export const testimonialsData = [
    {
        name: "AbdulRahim Magomu",
        photo: images.profile01,
        title: "CEO RahStduio",
        comment:
            "He brought our vision to life with an incredible eye for design and attention to detail. Our website now looks and feels so much more engaging and user-friendly. We're thrilled with the results and highly recommend his services",
    },
    {
        name: "Cindy Newton",
        photo: images.profile02,
        title: "Executive Director",
        comment:
            "His expertise in front-end development is evident in the seamless navigation and beautiful layout he created for our site. He was prompt, responsive, and took the time to understand our needs. We couldn't be happier with the outcome!",
    },
    {
        name: "Petr Wahigton",
        photo: images.profile03,
        title: "Designer",
        comment:
            "Not only did he deliver a fantastic website, but they also made it responsive and optimized for all devices. Our website's performance has improved significantly, and we've received countless compliments from our users.",
    },
    {
        name: "Mark Drury",
        photo: images.profile04,
        title: "Web Developer",
        comment:
            " He brought a fresh perspective to our project and exceeded our expectations in every way. We're already planning to collaborate with him again in the future.",
    },
    {
        name: "Martini Xhaka",
        photo: images.profile05,
        title: "Accountant",
        comment:
            "We are incredibly satisfied with his work, and our website has received numerous compliments for its aesthetics and usability.",
    },
];
