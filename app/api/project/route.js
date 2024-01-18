import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { title, category, url, github, imageUrl, description } = body;

        if (
            !title ||
            !category ||
            !url ||
            !github ||
            !imageUrl ||
            !description
        ) {
            return NextResponse.json(
                {
                    message: "Please input data",
                },
                { status: 409 }
            );
        }

        const newProject = await prisma.project.create({
            data: {
                title,
                category,
                url,
                github,
                imageUrl,
                description,
            },
        });

        return NextResponse.json(
            {
                newProject,
                message: "Project added successfully",
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Something went wrong",
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(projects);
    } catch {
        return NextResponse.json(
            {
                message: "Something went wrong",
            },
            { status: 500 }
        );
    }
}
