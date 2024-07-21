import Image from 'next/image';
import Comments from './Comments';

const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* User */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="/elaina.jpg" width={30} height={30} alt="" className='w-10 h-10 rounded-full' />
                    <span className='font-medium'>Elaina Chan</span>
                </div>
                <Image src="/more.png" width={16} height={16} alt="" />
            </div>
            {/* Deskripsi */}
            <div className="flex flex-col gap-4 ">
                <div className="w-full min-h-80 relative ring-1 rounded ring-gray-400 shadow-md shadow-slate-900">
                    <Image src="/elaina-1.jpg" fill className='object-cover rounded-md' alt="" />
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ipsa, minima neque quo error ab beatae facilis voluptas officia iusto dolorem, dicta expedita esse porro, veritatis necessitatibus numquam laudantium quidem?</p>
            </div>
            {/* Interaksi */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-4">
                    <div className="flex items-center gap-2 bg-slate-200 p-2 rounded-xl">
                        <Image src="/like.png" width={16} height={16} alt="" className='cursor-pointer' />
                        <span className='text-slate-600'>|</span>
                        <span className='text-slate-600'>200 <span className='hidden md:inline'> Likes</span></span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-200 p-2 rounded-xl">
                        <Image src="/comment.png" width={16} height={16} alt="" className='cursor-pointer' />
                        <span className='text-slate-600'>|</span>
                        <span className='text-slate-600'>100 <span className='hidden md:inline'> Comments</span></span>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center gap-2 bg-slate-200 p-2 rounded-xl">
                        <Image src="/share.png" width={16} height={16} alt="" className='cursor-pointer' />
                        <span className='text-slate-600'>|</span>
                        <span className='text-slate-600'>23 <span className='hidden md:inline'> Share</span></span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    );
};

export default Post;