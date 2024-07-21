"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

const UpdateUser = ({ user }: { user: User }) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div className="">
            <span className="text-purple-500 text-xs cursor-pointer" onClick={() => setOpen(true)}>
                Update
            </span>
            {open && (<div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
                <form action="" className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative">
                    <h1>Update Profile</h1>
                    <div className="mt-4 text-xs text-gray-500">
                        Use the navbar profile to change the avatar or username.
                    </div>
                    <div
                        className="flex flex-col gap-4 my-4">
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