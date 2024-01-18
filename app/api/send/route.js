import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { sender, contact, content } = body;

        if (!sender || !contact || !content) {
            return NextResponse.json(
                {
                    message: "Please input data",
                },
                { status: 409 }
            );
        }

        const newMessage = await prisma.message.create({
            data: {
                sender,
                contact,
                content,
            },
        });

        return NextResponse.json(
            {
                newMessage,
                message: "Message sent successfully",
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
