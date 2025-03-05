"use client";
import {
  Search,
  Settings,
  Grid,
  User,
  Image,
  Video,
  Newspaper,
  Map,
  MoreHorizontal,
} from "lucide-react";
import React, { Suspense } from "react";
import SearchInput from "./SearchInput";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const SearchHeader = () => {
  const searchQuery = useSearchParams().get("q") || "";
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center px-6 py-4 justify-around container ms space-x-8">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text flex-shrink-0"
          >
            Search
          </Link>

          <SearchInput query={searchQuery} />

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Grid className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 bg-blue-500 rounded-full">
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Search Options */}
        <div className="flex items-center justify-center g-4 md:gap-6 lg:gap-10 px-6 py-2 space-x-6 text-sm border-t border-gray-100 w-full">
          <Link
            href={`/search?q=${searchQuery}`}
            className="flex items-center space-x-1 text-blue-600 border-b-2 border-blue-600 pb-2"
          >
            <Search className="w-4 h-4" />
            <span>All</span>
          </Link>
          <Link
            href={`/search/images?q=${searchQuery}`}
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
          >
            <Image className="w-4 h-4" />
            <span>Images</span>
          </Link>
          <a
            href="#"
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
          >
            <Video className="w-4 h-4" />
            <span>Videos</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
          >
            <Newspaper className="w-4 h-4" />
            <span>News</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
          >
            <Map className="w-4 h-4" />
            <span>Maps</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
          >
            <MoreHorizontal className="w-4 h-4" />
            <span>More</span>
          </a>
        </div>
      </header>
    </Suspense>
  );
};

export default SearchHeader;
