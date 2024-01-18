import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { title, category, content, imageUrl, description } = body;

        if (!title || !category || !content || !imageUrl || !description) {
            return NextResponse.json(
                {
                    message: "Please input data",
                },
                { status: 409 }
            );
        }

        const newBlog = await prisma.blog.create({
            data: {
                title,
                category,
                content,
                imageUrl,
                description,
            },
        });

        return NextResponse.json(
            {
                newBlog,
                message: "Blog added successfully",
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
