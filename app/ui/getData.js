import axios from "axios";

export async function getProjects() {
    const body = await axios.get("http://127.0.0.1:3000/api/project");
    return body.data;
}
export async function getBlogs() {
    const body = await axios.get("http://127.0.0.1:3000/api/blog");
    return body.data;
}
export async function getUsers() {
    const body = await axios.get("http://127.0.0.1:3000/api/user");
    return body.data;
}
