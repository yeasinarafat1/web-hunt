"use client";
import { Camera, Mic, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const SearchInput = ({ type, query }: { type?: string; query?: string }) => {
  const [searchQuery, setSearchQuery] = useState(query || "");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  const handleClearSearch = () => {
    setSearchQuery("");
    router.push("/search");
  };
  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl">
      <div className="relative flex items-center">
        <div className="absolute left-4">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-3 px-12 border text-gray-700 border-gray-200 rounded-full hover:shadow-md focus:shadow-md focus:outline-none focus:border-gray-300 transition-shadow"
          placeholder="Search the web"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="absolute right-3 text-2xl text-gray-900 hover:text-gray-600"
          >
            <X />
          </button>
        )}
        {/* <div className="absolute right-4 flex space-x-2">
          <button type="button" className="p-2 hover:bg-gray-100 rounded-full">
            <Mic className="w-5 h-5 text-blue-500" />
          </button>
          <button type="button" className="p-2 hover:bg-gray-100 rounded-full">
            <Camera className="w-5 h-5 text-blue-500" />
          </button>
        </div> */}
      </div>

      {/* Search Buttons */}
      {type === "home" && (
        <div className="flex justify-center mt-8 space-x-4">
          <button
            type="submit"
            className="px-6 py-2 bg-gray-50 text-gray-700 text-sm rounded hover:border hover:border-gray-200 hover:shadow-sm"
          >
            Search
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-gray-50 text-gray-700 text-sm rounded hover:border hover:border-gray-200 hover:shadow-sm"
          >
            I'm Feeling Lucky
          </button>
        </div>
      )}
    </form>
  );
};

export default SearchInput;
