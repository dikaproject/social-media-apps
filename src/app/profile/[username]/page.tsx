import Image from 'next/image';
import LeftMenu from '@/components/leftMenu/LeftMenu';
import RightMenu from '@/components/rightMenu/RightMenu';
import Feed from '@/components/feed/Feed';
import NotFound from '../../../components/NotFound';
import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';

const ProfilePage = async ({ params }: { params: { username: string } }) => {
    const username = params.username;

    const user = await prisma.user.findFirst({
        where: {
            username,
        },
        include: {
            _count: {
                select: {
                    followers: true,
                    followings: true,
                    posts: true,
                },
            },
        },
    });

    if (!user) return <NotFound />;

    const { userId: currentUserId } = auth();

    let isBlocked;

    if (currentUserId) {
        const res = await prisma.block.findFirst({
            where: {
                blockerId: user.id,
                blockedId: currentUserId,
            },
        });

        if (res) isBlocked = true;
    } else {
        isBlocked = false;
    }

    if (isBlocked) return <NotFound />;


    return (
        <div className='flex gap-6 pt-6'>
            <div className="hidden xl:block w-[20%]"><LeftMenu type="profile" /></div>
            <div className="w-full lg:w-[70%] xl:w-[50%]">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full h-64 relative">
                            <Image src={user.cover || "/noCover.png"} alt="alt" className="object-cover rounded-md shadow-md shadow-slate-900 " fill />
                            <Image src={user.avatar || "/noAvatar.png"} alt="alt" className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 object-cover" width={128} height={128} />
                        </div>
                        <h1 className="mt-20 mb-4 text-2xl font-medium">{user.name && user.surname ? user.name + " " + user.surname: user.username}</h1>
                        <div className="flex items-center justify-center gap-12 mb-4">
                            <div className="flex flex-col items-center">
                                <span className="font-medium">{user._count.posts}</span>
                                <span className="text-sm">Post</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-medium">{user._count.followers}</span>
                                <span className="text-sm">Following</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-medium">{user._count.followings}</span>
                                <span className="text-sm">Followers</span>
                            </div>
                        </div>
                    </div>
                    <Feed username={user.username}/>
                </div>
            </div>
            <div className="hidden lg:block w-[30%]"><RightMenu user={user} /></div>

        </div>
    );
}

export default ProfilePage;