import { auth } from "@clerk/nextjs/server";
import Post from "./Post";
import prisma from "@/lib/client";

const Feed = async ({ username }: { username?: string }) => {
    const { userId } = auth();

    let posts: any[] = [];

    // Fetch posts by username if provided
    if (username) {
        posts = await prisma.post.findMany({
            where: {
                user: {
                    username: username,
                },
            },
            include: {
                user: true,
                likes: {
                    select: {
                        userId: true,
                    },
                },
                _count: {
                    select: {
                        comments: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    // Fetch posts from all users if no username is provided
    if (!username) {
        posts = await prisma.post.findMany({
            include: {
                user: true,
                likes: {
                    select: {
                        userId: true,
                    },
                },
                _count: {
                    select: {
                        comments: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
            {posts.length ? (
                posts.map(post => (
                    <Post key={post.id} post={post} />
                ))
            ) : (
                "No posts found!"
            )}
        </div>
    );
};

export default Feed;
