import prisma from "./client";


export const getAllPosts = async () => {
    return await prisma.post.findMany({
        include: {
            user: true,
            likes: true,
            _count: {
                select: { comments: true },
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
};
