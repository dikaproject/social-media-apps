import Image from "next/image";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const AddPost = () => {

    const {userId} = auth()

    console.log(userId);

    const testAction = async (formData:FormData) => {
        "use server"

        if (!userId) return;
        const desc = formData.get("desc") as string;
        try {
            const res = await prisma.post.create({
                data: {
                    userId:userId,
                    desc: desc,
                },
            });
            console.log("Post Created", res);
        }catch(err){
            console.log("Error", err);
        }
    };


    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
            {/* Avatar Layout */}
            <Image
                width={90}
                height={90}
                src="https://images.pexels.com/photos/16876973/pexels-photo-16876973/free-photo-of-young-woman-sitting-by-the-water-with-a-bouquet.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt=""
                className="w-12 h-12 object-cover rounded-full ring-1 ring-cyan-500"
            />
            {/* Post Layout */}
            <div className="flex-1">
                {/* Text Input Layout */}
                <form action={testAction} className="flex gap-4">
                    <textarea placeholder="Posting Minimal biar hidup" className="flex-1 bg-slate-200 rounded-lg p-2 text-slate-500" name="desc" id=""></textarea>
                    <Image
                        src="/emoji.png"
                        alt=""
                        width={10}
                        height={10}
                        className="w-5 h-5 cursor-pointer self-end"
                    />
                    <button>Send</button>
                </form>
                {/* Post Option */}
                <div className="flex items-center gap-4 mt-4 text-slate-500 flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addimage.png" alt="" width={20} height={20} />
                        Foto
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addVideo.png" alt="" width={20} height={20} />
                        Video
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addEvent.png" alt="" width={20} height={20} />
                        Event
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/poll.png" alt="" width={20} height={20} />
                        Poll
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;
