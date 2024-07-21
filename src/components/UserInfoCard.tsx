import Image from 'next/image';
import Link from 'next/link';

const UserInfoCard = ({ userId }: { userId: string }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className='text-slate-600'>User Information</span>
                <Link href="/" className="text-purple-600 text-xs">See All</Link>
            </div>
            {/* Bottom */}
            <div className="flex flex-col gap-4 text-slate-500">
                <div className="flex items-center gap-2">
                    <span className='text-xl text-black'>Elaina</span>
                    <span className='text-sm'>@elaina12</span>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos incidunt ipsum eius. Unde quo porro recusandae, amet sint vitae, enim facere rerum laudantium, veniam ipsam asperiores corrupti eaque repudiandae ipsum.</p>
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="alt" width={16} height={16} />
                    <span>Living In <b>Isekai</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/school.png" alt="alt" width={16} height={16} />
                    <span>Went To <b>Magician School Iseaki</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/work.png" alt="alt" width={16} height={16} />
                    <span>Exploring <b>the world of isekai</b></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <Image src="/link.png" alt="alt" width={16} height={16} />
                        <Link href="https://dikaproject.vercel.app" className='text-purple-500 font-medium'>Dika.Dev</Link>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Image src="/date.png" alt="alt" width={16} height={16} />
                        <span>Join In Here Juni 2024</span>
                    </div>
                </div>
                <button className='bg-purple-500 text-white text-sm rounded-md p-2'>Follow</button>
                <span className='text-red-400 self-end text-xs cursor-pointer'>Block User</span>
            </div>
        </div>
    );
}

export default UserInfoCard;