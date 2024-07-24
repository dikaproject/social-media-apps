// app/friend/SearchFriend.tsx
"use client";

import { useState } from "react";

const SearchFriend = ({ onSearch }: { onSearch: (term: string) => void }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    return (
        <div className="search-friend">
            <input
                type="text"
                placeholder="Search"
                className="w-full p-2 rounded bg-gray-800 text-white"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default SearchFriend;
