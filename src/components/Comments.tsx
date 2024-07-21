import Image from "next/image";

const Comments = () => {
    return (
        <div className="">
            {/*  */}
            <div className="flex items-center gap-4">
                <Image
                    src="/megumin.jpg"
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input
                        type="text"
                        placeholder="Berkomentar Yang sopan Bos"
                        className="bg-transparent outline-none flex-1"
                    />
                    <Image
                        src="/emoji.png"
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    />
                </div>
            </div>
            {/* Comments */}
            <div className="">
                {/* comments */}
                <div className="flex gap-4 justify-between mt-6">
                    {/* Avatar */}
                    <Image
                        src="/megumin.jpg"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                    />
                    {/* Desc */}
                    <div className="flex flex-col gap-2">
                        {/* Name user and waktu post commmants */}
                        <div className="flex items-center gap-4">
                            <span className="font-medium">Megumin Chan</span>
                            <span className="text-xs text-gray-500">1 hours ago</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Blanditiis dolores numquam esse placeat cumque. Dicta, magnam
                            nobis quod fugit optio voluptates dolores? Sapiente delectus
                            asperiores quis praesentium quam neque odit.
                        </p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/like.png"
                                    alt=""
                                    width={12}
                                    height={12}
                                    className="cursor-pointer w-4 h-4"
                                />
                                <span className="text-slate-600">|</span>
                                <span className="text-slate-600">100 Likes</span>
                            </div>
                            <div className="">Reply</div>
                        </div>
                    </div>
                    {/* icon */}
                    <Image
                        src="/more.png"
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer w-4 h-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Comments;
