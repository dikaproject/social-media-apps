"use client";
import { updateProfile } from "@/lib/actions";
import { User } from "@prisma/client";
import Image from "next/image";
import { useActionState, useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from "next/navigation";
import UpdateButton from "../rightMenu/UpdateButton";

const SettingsMobile = ({ user }: { user: User }) => {
    const [cover, setCover] = useState<any>(false);
    const [state, formAction] = useActionState(updateProfile, { success: false, error: false });
    const router = useRouter();

    const handleClose = () => {
        state.success && router.refresh();
    };

    return (
        <div className="p-4">
            <form action={(formData) =>
                formAction({ formData, cover: cover?.secure_url || "" })
            } className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-2">
                {/* Title */}
                <h1 className="text-lg font-semibold mb-2">Update Profile</h1>
                <div className="mt-2 text-xs text-gray-500">
                    Use the profile picture to change the avatar or username.
                </div>
                {/* Cover update */}
                <CldUploadWidget
                    uploadPreset="sosmed"
                    onSuccess={(result) => setCover(result.info)}
                >
                    {({ open }) => (
                        <div
                            className="flex flex-col gap-4 my-4"
                            onClick={() => open()}
                        >
                            <label htmlFor="" className="text-xs text-gray-500">Cover Picture</label>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <Image
                                    src={user?.cover || "/noCover.png"}
                                    alt="Cover Picture"
                                    width={48}
                                    height={32}
                                    className="w-12 h-8 rounded-md object-cover"
                                />
                                <span className="text-xs underline text-gray-600">Change</span>
                            </div>
                        </div>
                    )}
                </CldUploadWidget>
                {/* WRAPPER */}
                <div className="flex flex-col gap-4">
                    {/* INPUT */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-xs text-gray-500">First Name</label>
                        <input
                            type="text"
                            placeholder={user?.name || "First Name"}
                            className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                            name="name"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-xs text-gray-500">Surname</label>
                        <input
                            type="text"
                            placeholder={user?.surname || "Last Name"}
                            className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                            name="surname"
                        />
                    </div>
                    {/* INPUT */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-xs text-gray-500">Description</label>
                        <input
                            type="text"
                            placeholder={user?.description || "Your Description Life"}
                            className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                            name="description"
                        />
                    </div>
                    {/* INPUT */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-xs text-gray-500">City</label>
                        <input
                            type="text"
                            placeholder={user?.city || "Indonesia"}
                            className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                            name="city"
                        />
                    </div>
                    {/* INPUT */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-xs text-gray-500">School</label>
                        <input
                            type="text"
                            placeholder={user?.school || "SMK Telkom Purwokerto"}
                            className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                            name="school"
                        />
                    </div>
                    {/* INPUT */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-xs text-gray-500">Work</label>
                        <input
                            type="text"
                            placeholder={user?.work || "Telkom Indonesia"}
                            className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                            name="work"
                        />
                    </div>
                    {/* INPUT */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-xs text-gray-500">Website</label>
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
            </form>
        </div>
    )
}

export default SettingsMobile;
