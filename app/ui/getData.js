import axios from "axios";

export async function getProjects() {
    const body = await axios.get(
        "https://green-4xtzt7d15-wyasyn.vercel.app//api/project"
    );
    return body.data;
}
export async function getBlogs() {
    const body = await axios.get(
        "https://green-4xtzt7d15-wyasyn.vercel.app//api/blog"
    );
    return body.data;
}
export async function getUsers() {
    const body = await axios.get(
        "https://green-4xtzt7d15-wyasyn.vercel.app//api/user"
    );
    return body.data;
}
