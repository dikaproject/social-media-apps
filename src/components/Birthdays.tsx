import Image from 'next/image';
import Link from 'next/link';

const Birthdays = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className='text-slate-600'>Birthdays</span>
            </div>
            {/* Bottom */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="/elaina.jpg" width={40} height={40} alt="" className='w-10 h-10 rounded-full object-cover' />
                    <span className="font-semibold">Elaina</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <button className='bg-purple-500 text-white text-xs px-2 py-1 rounded-md'>Celebrate</button>
                </div>
            </div>
            {/* Upcoming */}
            <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
                <Image src="/gift.png" width={24} height={24} alt="" />
                <Link href="/" className='flex flex-col gap-1 text-xs'>
                    <span className='text-slate-700 font-semibold'>Upcoming Birthdays</span>
                    <span className='text-slate-400'>See other 16 have upcoming birthdays</span>
                </Link>
            </div>
        </div>
    );
}

export default Birthdays;