import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm">
            <div className="flex items-center justify-between text-slate-500 font-medium">
                <span>Sponsored Ads</span>
                <Image src="/more.png" width={16} height={16} alt="" />
            </div>
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                    <Image src="/elaina-1.jpg" className="rounded-lg object-cover" fill alt="" />
                </div>
                <div className="flex items-center gap-4">
                    <Image src="/elaina-1.jpg" className="rounded-full w-6 h-6 object-cover" width={24} height={24} alt="" />
                    <span className="text-purple-600 font-medium">The Journey Elaina</span>
                </div>
                <p className={size === "sm" ? "text-xs" : "text-sm"}>
                    {size === "sm"
                        ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        : size === "md"
                            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."
                            : "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                </p>
                <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
                    Learn more
                </button>
            </div>
        </div>
    );
}

export default Ad;