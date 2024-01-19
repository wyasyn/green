"use server";

import prisma from "@/lib/prisma";

export async function getProjects() {
    let projects = await prisma.project.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return projects;
}
export async function getBlogs() {
    let blogs = await prisma.blog.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return blogs;
}
export async function getUsers() {
    let users = await prisma.user.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return users;
}
