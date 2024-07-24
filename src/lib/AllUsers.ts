import { auth } from "@clerk/nextjs/server";
import prisma from "./client";


export const AllUsers = async () => {
    const { userId } = auth();

    if (!userId) return null;
    return await prisma.user.findMany({
        where: {
            id: userId,
        },
    });
}