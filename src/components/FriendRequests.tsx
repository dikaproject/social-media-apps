import Link from "next/link";
import Image from "next/image";

const FriendRequests = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className='text-slate-600'>Friend Request</span>
                <Link href="/" className="text-purple-600 text-xs">See All</Link>
            </div>
            {/* Bottom */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="/elaina.jpg" width={40} height={40} alt="" className='w-10 h-10 rounded-full object-cover' />
                    <span className="font-semibold">Elaina</span>
                </div>
                <div className="flex gap-3 justify-end">
                <Image src="/accept.png" width={20} height={20} alt="" className='cursor-pointer' />
                <Image src="/reject.png" width={20} height={20} alt="" className='cursor-pointer' />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="/elaina.jpg" width={40} height={40} alt="" className='w-10 h-10 rounded-full object-cover' />
                    <span className="font-semibold">Elaina</span>
                </div>
                <div className="flex gap-3 justify-end">
                <Image src="/accept.png" width={20} height={20} alt="" className='cursor-pointer' />
                <Image src="/reject.png" width={20} height={20} alt="" className='cursor-pointer' />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="/elaina.jpg" width={40} height={40} alt="" className='w-10 h-10 rounded-full object-cover' />
                    <span className="font-semibold">Elaina</span>
                </div>
                <div className="flex gap-3 justify-end">
                <Image src="/accept.png" width={20} height={20} alt="" className='cursor-pointer' />
                <Image src="/reject.png" width={20} height={20} alt="" className='cursor-pointer' />
                </div>
            </div>
        </div>
    );
}

export default FriendRequests;