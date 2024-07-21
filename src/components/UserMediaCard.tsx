import Image from 'next/image';
import Link from 'next/link';

const UserMediaCard = ({ userId }: { userId: string }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className='text-slate-600'>User Media</span>
                <Link href="/" className="text-purple-600 text-xs">See All</Link>
            </div>
            {/* Bottom */}
            <div className="flex gap-4 justify-between flex-wrap">
                <div className="relative w-1/5 h-24">
                    <Image src="/elaina-1.jpg" alt="alt" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="/elaina-1.jpg" alt="alt" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="/elaina-1.jpg" alt="alt" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="/elaina-1.jpg" alt="alt" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="/elaina-1.jpg" alt="alt" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="/elaina-1.jpg" alt="alt" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="/elaina-1.jpg" alt="alt" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="/elaina-1.jpg" alt="alt" className="object-cover rounded-md" fill />
                </div>
            </div>
        </div>
    );
}

export default UserMediaCard;