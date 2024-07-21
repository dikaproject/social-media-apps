import { User } from "@prisma/client";
import Ad from "../Ad";
import { Suspense } from "react";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";

const RightMenu = ({ user }: { user: User }) => {
    return (
        <div className="flex flex-col gap-6">
            {user ? (
                <>
                    <Suspense fallback="Loading...">
                        <UserInfoCard user={user} />
                    </Suspense>
                    <Suspense fallback="Loading...">
                        <UserMediaCard user={user} />
                    </Suspense>
                </>) : null}
            <FriendRequests />
            <Birthdays />
            <Ad size="md" />
        </div>
    );
};

export default RightMenu;