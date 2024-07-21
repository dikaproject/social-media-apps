import Image from 'next/image';
const Stories = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
            <div className="flex gap-8 w-max">
                {/* Story Layout */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/26997896/pexels-photo-26997896/free-photo-of-woman-in-t-shirt-and-skirt-walking-by-field-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-4 ring-green-500' />
                    <span className="font-medium">Dika</span>
                </div>
                {/* Story Layout */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/21430948/pexels-photo-21430948/free-photo-of-a-man-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-4 ring-green-500' />
                    <span className="font-medium">NeiXas</span>
                </div>
                {/* Story Layout */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/2034534/pexels-photo-2034534.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-4 ring-green-500' />
                    <span className="font-medium">Queen</span>
                </div>
                {/* Story Layout */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/2020891/pexels-photo-2020891.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-4 ring-green-500' />
                    <span className="font-medium">Anggraeni</span>
                </div>
                {/* Story Layout */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/3703966/pexels-photo-3703966.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-4 ring-green-500' />
                    <span className="font-medium">Luna</span>
                </div>
                {/* Story Layout */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/26997896/pexels-photo-26997896/free-photo-of-woman-in-t-shirt-and-skirt-walking-by-field-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-4 ring-green-500' />
                    <span className="font-medium">Dika</span>
                </div>
            </div>
        </div>
    );
 };

export default Stories;