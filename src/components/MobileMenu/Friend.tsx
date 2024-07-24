// app/friend/page.tsx

import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import FriendInfo from "./FriendInfo";

const Friend = async () => {
    const users = await prisma.user.findMany();
    const { userId } = auth();

    if (!userId) return null;

    const user = await prisma.user.findFirst({
        where: {
            id: userId,
        },
        include: {
            _count: {
                select: {
                    followers: true,
                },
            },
        },
    });

    if (!user) return null;

    let isUserBlocked = false;
    let isFollowing = false;
    let isFollowingSent = false;

    const { userId: currentUserId } = auth();

    if (currentUserId) {
        const blockRes = await prisma.block.findFirst({
            where: {
                blockerId: currentUserId,
                blockedId: user.id,
            },
        });

        isUserBlocked = !!blockRes;

        const followRes = await prisma.follower.findFirst({
            where: {
                followerId: currentUserId,
                followingId: user.id,
            },
        });

        isFollowing = !!followRes;

        const followReqRes = await prisma.followRequest.findFirst({
            where: {
                senderId: currentUserId,
                receiverId: user.id,
            },
        });

        isFollowingSent = !!followReqRes;
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-bold">{user.name && user.surname ? user.name + " " + user.surname : user.username}</h1>
            </div>
            {/* Search Bar */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-2 rounded bg-gray-800 text-white"
                />
            </div>
            {/* Info Text */}
            <div className="mb-4 text-center text-sm text-gray-400">
                Feature Find User in Development <br /> Fitur Temukan Pengguna dalam Pengembangan
            </div>
            {/* Users List */}
            <div className="flex flex-col space-y-4">
                {users.map((user: User) => (
                    <div key={user.id} className="flex items-center gap-4">
                        <Image
                            src={user.avatar || "/noAvatar.png"}
                            alt="avatar"
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                        />
                        <div className="flex-grow">
                            <Link href={`/profile/${user.username}`} passHref>
                                <span className="font-semibold">
                                    {user.name && user.surname ? `${user.name} ${user.surname}` : user.username}
                                </span>
                            </Link>
                            <span className="text-xs text-gray-500 pl-2">@{user.username}</span>
                        </div>
                        {currentUserId && currentUserId !== user.id && (
                            <FriendInfo
                                userId={user.id}
                                isUserBlocked={isUserBlocked}
                                isFollowing={isFollowing}
                                isFollowingSent={isFollowingSent}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Friend;
