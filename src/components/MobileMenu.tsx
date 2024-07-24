"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg z-10">
      <div className="flex justify-around items-center py-2">
        <Link href="/">
          <span className="flex flex-col items-center gap-1 transition-transform duration-200 hover:scale-110">
            <Image src="/home.png" alt="Home" width={24} height={24} className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </span>
        </Link>
        <Link href="/friend">
          <span className="flex flex-col items-center gap-1 transition-transform duration-200 hover:scale-110">
            <Image src="/people.png" alt="Friends" width={24} height={24} className="w-6 h-6" />
            <span className="text-xs">Friends</span>
          </span>
        </Link>
        <span
          className="flex flex-col items-center gap-1 transition-transform duration-200 hover:scale-110 cursor-pointer"
          onClick={showPopup}
        >
          <Image src="/groups.png" alt="Groups" width={24} height={24} className="w-6 h-6" />
          <span className="text-xs">Groups</span>
        </span>
        <span
          className="flex flex-col items-center gap-1 transition-transform duration-200 hover:scale-110 cursor-pointer"
          onClick={showPopup}
        >
          <Image src="/stories.png" alt="Stories" width={24} height={24} className="w-6 h-6" />
          <span className="text-xs">Story</span>
        </span>

        <Link href="/settings">
          <span className="flex flex-col items-center gap-1 transition-transform duration-200 hover:scale-110">
            <Image src="/settings.png" alt="Settings" width={24} height={24} className="w-6 h-6" />
            <span className="text-xs">Settings</span>
          </span>
        </Link>
      </div>
      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md text-center relative">
            <p className="mb-4 text-sm text-gray-700">
              Mohon Maaf Page ini sedang tahap development versi 5, mohon ditunggu informasi selanjutnya di social media developer website ini di
              <br />
              Instagram : @dika_art_project
              <br />
              WhatsApp : +62-812-2784-8422
            </p>
            <button
              onClick={hidePopup}
              className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
