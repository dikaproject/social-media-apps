import Image from 'next/image';
import Comments from './Comments';
import { auth } from '@clerk/nextjs/server';
import { Post as PostType, User } from '@prisma/client';
import PostInteraction from './PostInteraction';
import { Suspense } from 'react';
import PostInfo from './PostInfo';
import Link from 'next/link';

type FeedPostType = PostType & { user: User } & { likes: { userId: string }[] } & { _count: { comments: number } };

const Post = ({ post }: { post: FeedPostType }) => {
    const { userId } = auth();
    return (
        <div className="flex flex-col gap-4">
            {/* User */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src={post.user.avatar || "/noAvatar.png"} width={30} height={30} alt="" className='w-10 h-10 rounded-full' />
                    <Link href={`/profile/${post.user.username}`} passHref>
                        <span className='font-medium'>
                            {(post.user.name && post.user.surname) ? post.user.name + " " + post.user.surname : post.user.username}
                        </span>
                    </Link>
                </div>
                {userId === post.user.id && <PostInfo postId={post.id} />}
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                {post.img && (
                    <div className="w-full min-h-80 relative ring-1 rounded ring-gray-400 shadow-md shadow-slate-900">
                        <Image
                            src={post.img}
                            fill
                            className="object-cover rounded-md"
                            alt=""
                        />
                    </div>
                )}
                <p>{post.desc}</p>
            </div>
            {/* Interaksi */}
            <Suspense fallback="Loading...">
                <PostInteraction
                    postId={post.id}
                    likes={post.likes.map((like) => like.userId)}
                    commentNumber={post._count.comments}
                />
            </Suspense>
            <Suspense fallback="Loading...">
                <Comments postId={post.id} />
            </Suspense>
        </div>
    );
};

export default Post;