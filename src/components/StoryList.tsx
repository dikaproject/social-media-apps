"use client";

import { addStory } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";
import StoryAdd from "./StoryAdd";
import StoryPopup from "./StoryPopup";

type StoryWithUser = Story & {
    user: User;
};

const StoryList = ({
    stories,
    userId,
}: {
    stories: StoryWithUser[];
    userId: string;
}) => {
    const [storyList, setStoryList] = useState(stories);
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [currentStory, setCurrentStory] = useState<StoryWithUser | null>(null);

    const { user, isLoaded } = useUser();

    const handleAddStory = async (imgUrl: string) => {
        setShowAddPopup(false);

        addOptimisticStory({
            id: Math.random(),
            img: imgUrl,
            createdAt: new Date(Date.now()),
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
            userId: userId,
            user: {
                id: userId,
                username: "Sending...",
                avatar: user?.imageUrl || "/noAvatar.png",
                cover: "",
                description: "",
                name: "",
                surname: "",
                city: "",
                work: "",
                school: "",
                website: "",
                createdAt: new Date(Date.now()),
            },
        });

        try {
            const createdStory = await addStory(imgUrl);
            setStoryList((prev) => [createdStory!, ...prev]);
        } catch (err) { }
    };

    const [optimisticStories, addOptimisticStory] = useOptimistic(
        storyList,
        (state, value: StoryWithUser) => [value, ...state]
    );

    return (
        <>
            {showAddPopup && (
                <StoryAdd onSuccess={handleAddStory} onClose={() => setShowAddPopup(false)} />
            )}
            {currentStory && (
                <StoryPopup story={currentStory} onClose={() => setCurrentStory(null)} />
            )}
            <div
                className="flex flex-col items-center gap-2 cursor-pointer relative"
                onClick={() => setShowAddPopup(true)}
            >
                <Image
                    src={user?.imageUrl || "/noAvatar.png"}
                    alt=""
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full ring-2 ring-green-500 object-cover"
                />
                <span className="font-medium">Add a Story</span>
                <div className="absolute text-6xl text-gray-200 top-1">+</div>
            </div>
            {optimisticStories.map((story) => (
                <div
                    className="flex flex-col items-center gap-2 cursor-pointer"
                    key={story.id}
                    onClick={() => setCurrentStory(story)}
                >
                    <Image
                        src={story.user.avatar || "/noAvatar.png"}
                        alt=""
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full ring-2"
                    />
                    <span className="font-medium">
                        {story.user.name || story.user.username}
                    </span>
                </div>
            ))}
        </>
    );
};

export default StoryList;
