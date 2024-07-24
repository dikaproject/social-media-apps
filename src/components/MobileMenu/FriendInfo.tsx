"use client";
import { switchBlock, switchFollow } from "@/lib/actions";
import { useOptimistic, useState } from "react";

const FriendInfo = ({
    userId,
    isUserBlocked,
    isFollowing,
    isFollowingSent,
}: {
    userId: string;
    isUserBlocked: boolean;
    isFollowing: boolean;
    isFollowingSent: boolean;
}) => {
    const [userState, setUserState] = useState({
        following: isFollowing,
        blocked: isUserBlocked,
        followingRequestSent: isFollowingSent,
    });

    const follow = async () => {
        switchOptimisticState("follow");
        try {
            await switchFollow(userId);
            setUserState((prev) => ({
                ...prev,
                following: !prev.following,
                followingRequestSent: !prev.following && !prev.followingRequestSent,
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const block = async () => {
        switchOptimisticState("block");
        try {
            await switchBlock(userId);
            setUserState((prev) => ({
                ...prev,
                blocked: !prev.blocked,
            }));
        } catch (err) { }
    };

    const [optimisticState, switchOptimisticState] = useOptimistic(
        userState,
        (state, value: "follow" | "block") =>
            value === "follow"
                ? {
                    ...state,
                    following: !state.following,
                    followingRequestSent: !state.following && !state.followingRequestSent,
                }
                : { ...state, blocked: !state.blocked }
    );

    return (
        <div className="flex justify-end space-x-2">
            <form action={follow}>
                <button
                    type="submit"
                    className="w-full bg-purple-500 text-white text-sm rounded-md p-2"
                >
                    {optimisticState.following
                        ? "Following"
                        : optimisticState.followingRequestSent
                            ? "Friend Request Sent"
                            : "Follow"}
                </button>
            </form>
        </div>
    );
};

export default FriendInfo;
