"use client";

import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { IoClose } from 'react-icons/io5';

const StoryAdd = ({ onSuccess, onClose }: { onSuccess: (imgUrl: string) => void, onClose: () => void }) => {
    const [img, setImg] = useState<any>();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center relative w-full max-w-md mx-auto">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    <IoClose size={24} />
                </button>
                <h2 className="text-lg font-bold mb-4">Add a Story</h2>
                <CldUploadWidget
                    uploadPreset="sosmed"
                    onSuccess={(result, { widget }) => {
                        setImg(result.info);
                        widget.close();
                    }}
                >
                    {({ open }) => (
                        <>
                            <button
                                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
                                onClick={() => open()}
                            >
                                Upload Image
                            </button>
                            {img && (
                                <div className="flex flex-col items-center">
                                    <Image
                                        src={img.secure_url}
                                        alt="Uploaded Story"
                                        width={100}
                                        height={100}
                                        className="w-24 h-24 rounded-full object-cover mb-4"
                                    />
                                    <button
                                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                                        onClick={() => onSuccess(img.secure_url)}
                                    >
                                        Add Story
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </CldUploadWidget>
            </div>
        </div>
    );
};

export default StoryAdd;
