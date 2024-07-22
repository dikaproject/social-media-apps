"use client";
import { updateProfile } from "@/lib/actions";
import { User } from "@prisma/client";
import Image from "next/image";
import { useActionState, useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from "next/navigation";
import UpdateButton from './UpdateButton';

const UpdateUser = ({ user }: { user: User }) => {
    const [open, setOpen] = useState(false);
    const [cover, setCover] = useState<any>(false);

    const [state, formAction] = useActionState(updateProfile, { success: false, error: false });

    const router = useRouter();

    const handleClose = () => {
        setOpen(false);
        state.success && router.refresh();
      };
    return (
        <div className="">
            <span className="text-purple-500 text-xs cursor-pointer" onClick={() => setOpen(true)}>
                Update
            </span>
            {open && (<div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
                <form action={(formData) =>
                    formAction({ formData, cover: cover?.secure_url || "" })
                } className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative">
                    {/* Title */}
                    <h1>Update Profile</h1>
                    <div className="mt-4 text-xs text-gray-500">
                        Use the navbar profile to change the avatar or username.
                    </div>
                    {/* Cover update */}
                    <CldUploadWidget
                        uploadPreset="sosmed"
                        onSuccess={(result) => setCover(result.info)}
                    >
                        {({ open }) => {
                            return (
                                <div
                                    className="flex flex-col gap-4 my-4"
                                    onClick={() => open()}
                                >
                                    <label htmlFor="">Cover Picture</label>
                                    <div className="flex items-center gap-2 cursor-pointer">
                                        <Image
                                            src={user?.cover || "/noCover.png"}
                                            alt=""
                                            width={48}
                                            height={32}
                                            className="w-12 h-8 rounded-md object-cover"
                                        />
                                        <span className="text-xs underline text-gray-600">
                                            Change
                                        </span>
                                    </div>
                                </div>
                            );
                        }}
                    </CldUploadWidget>
                    {/* WRAPPER */}
                    <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                        {/* INPUT */}
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className="text-xs text-gray-500">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder={user?.name || "First Name"}
                                className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                name="name"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className="text-xs text-gray-500">
                                Surname
                            </label>
                            <input
                                type="text"
                                placeholder={user?.surname || "Last Name"}
                                className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                name="surname"
                            />
                        </div>
                        {/* INPUT */}
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className="text-xs text-gray-500">
                                Description
                            </label>
                            <input
                                type="text"
                                placeholder={user?.description || "Your Description Life"}
                                className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                name="description"
                            />
                        </div>
                        {/* INPUT */}
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className="text-xs text-gray-500">
                                City
                            </label>
                            <input
                                type="text"
                                placeholder={user?.city || "Indonesia"}
                                className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                name="city"
                            />
                        </div>
                        {/* INPUT */}

                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className="text-xs text-gray-500">
                                School
                            </label>
                            <input
                                type="text"
                                placeholder={user?.school || "SMK Telkom Purwokerto"}
                                className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                name="school"
                            />
                        </div>
                        {/* INPUT */}

                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className="text-xs text-gray-500">
                                Work
                            </label>
                            <input
                                type="text"
                                placeholder={user?.work || "Telkom Indonesia"}
                                className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                name="work"
                            />
                        </div>
                        {/* INPUT */}

                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className="text-xs text-gray-500">
                                Website
                            </label>
                            <input
                                type="text"
                                placeholder={user?.website || "dikaproject.vercel.app"}
                                className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                name="website"
                            />
                        </div>
                    </div>
                    <UpdateButton />
                    {state.success && (
                        <div className="text-green-500 text-sm">Profile updated!</div>
                    )}
                    {state.error && (
                        <div className="text-red-500 text-sm">Something went wrong!</div>
                    )}
                    <div className="absolute text-xl right-2 top-3 cursor-pointer pr-2" onClick={handleClose}>
                        x
                    </div>
                </form>
            </div>
            )}
        </div>
    )
}

export default UpdateUser;