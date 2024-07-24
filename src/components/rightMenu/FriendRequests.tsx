import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";
import FriendRequestList from "./FriendRequestList";

const FriendRequests = async () => {
    const { userId } = auth();

    if (!userId) return null;

    const requests = await prisma.followRequest.findMany({
        where: {
            receiverId: userId,
        },
        include: {
            sender: true,
        },
    });

    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className='text-slate-600'>Friend Request</span>
                <Link href="/" className="text-purple-600 text-xs">See All</Link>
            </div>
            {/* Bottom */}
            {requests.length === 0 ? (
                <div className="text-center text-gray-500">
                    Friend Request Not Found
                </div>
            ) : (
                <FriendRequestList requests={requests} />
            )}
        </div>
    );
}

export default FriendRequests;
