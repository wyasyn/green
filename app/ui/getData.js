import axios from "axios";

export async function getProjects() {
    const body = await axios.get("/api/project");
    return body.data;
}
export async function getBlogs() {
    const body = await axios.get("/api/blog");
    return body.data;
}
export async function getUsers() {
    const body = await axios.get("/api/user");
    return body.data;
}
