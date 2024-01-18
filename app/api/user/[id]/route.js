import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    const id = params.id;
    try {
        await prisma.user.delete({
            where: {
                id,
            },
        });
        return NextResponse.json(
            {
                message: "User deleted successfully",
            },
            {
                status: 201,
            }
        );
    } catch {
        return NextResponse.json(
            {
                message: "Deleting failed",
            },
            {
                status: 500,
            }
        );
    }
}
