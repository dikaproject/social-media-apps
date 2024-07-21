import Image from 'next/image';
import LeftMenu from '@/components/LeftMenu';
import RightMenu from '@/components/RightMenu';
import Feed from '@/components/Feed';
import NotFound from '../../../components/NotFound';

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


    return (
        <div className='flex gap-6 pt-6'>
            <div className="hidden xl:block w-[20%]"><LeftMenu type="profile" /></div>
            <div className="w-full lg:w-[70%] xl:w-[50%]">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full h-64 relative">
                            <Image src="/elaina-1.jpg" alt="alt" className="object-cover rounded-md shadow-md shadow-slate-900 " fill />
                            <Image src="/elaina.jpg" alt="alt" className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 object-cover" width={128} height={128} />
                        </div>
                        <h1 className="mt-20 mb-4 text-2xl font-medium">Elaina</h1>
                        <div className="flex items-center justify-center gap-12 mb-4">
                            <div className="flex flex-col items-center">
                                <span className="font-medium">100</span>
                                <span className="text-sm">Post</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-medium">500K</span>
                                <span className="text-sm">Followers</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-medium">23</span>
                                <span className="text-sm">Following</span>
                            </div>
                        </div>
                    </div>
                    <Feed />
                </div>
            </div>
            <div className="hidden lg:block w-[30%]"><RightMenu userId="test" /></div>

        </div>
    );
}

export default ProfilePage;