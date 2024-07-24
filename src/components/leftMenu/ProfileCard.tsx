import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';

const ProfileCard = async () => {
    const { userId } = auth();

    if (!userId) return null;

    const user = await prisma.user.findFirst({
        where: {
            id: userId,
        },
        include: {
            _count: {
                select: {
                    followers: true
                },
            }
        }
    })

    if(!user) return null;

     // Check if the user is the special user
     const isSpecialUser = user.id === 'user_2jY39fRo2jHDizfqQkFyFjmgWAG' || user.username === 'dikadev';
    return (
        <div className="p-6 bg-white rounded-lg shadow-md text-sm flex flex-col gap-8">
            <div className="h-20 relative">
                <Image src={user.cover || "/elaina-1.jpg"} alt="alt" fill className='rounded-md object-cover' />
                <Image src={user.avatar || "/noAvatar.png"} alt="alt" width={48} height={48} className='rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-purple-600 z-10' />
            </div>
            <div className="h-20 flex flex-col gap-2 items-center">
                <span className='font-semibold'>{user.name && user.surname ? user.name + " " + user.surname: user.username}</span>
                <div className="flex items-center gap-4">
                    <div className="flex">
                    </div>
                    <span className="text-xs text-slate-500">{user._count.followers} Folllowers</span>
                    {/* Icons Image Centang Biru */}
                     {isSpecialUser && (
                            <Image src="/centang-biru.jpg" alt="verified" width={12} height={12} className='rounded-full object-cover w-3 h-3' />
                        )}
                </div>
                {/* logika button to profile */}
                <Link href={`/profile/${user.username}`}>
                    <button className='bg-purple-500 text-white text-xs p-2 rounded-md'>My Profile</button>
                </Link>
            </div>
        </div>
    );
}

export default ProfileCard;