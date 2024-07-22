import { useEffect } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5"; // Pastikan Anda telah menginstal react-icons

const StoryPopup = ({ story, onClose }: { story: any, onClose: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000); // Pop-up akan tertutup setelah 5 detik
        return () => clearTimeout(timer); // Bersihkan timer ketika komponen unmount
    }, [onClose]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center relative w-full max-w-md mx-auto">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    <IoClose size={24} />
                </button>
                <Image
                    src={story.img}
                    alt="Story"
                    width={300}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover mb-4"
                />
                <span className="font-medium">
                    {story.user.name || story.user.username}
                </span>
            </div>
        </div>
    );
};

export default StoryPopup;
