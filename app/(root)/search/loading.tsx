import React from "react";
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
import Link from "next/link";
import SearchInput from "@/app/components/SearchInput";
import SearchResultPagination from "@/app/components/SearchResultPagination";

const SearchResultsSkeleton = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center px-6 py-4 justify-around container ms space-x-8">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text flex-shrink-0"
          >
            Search
          </Link>

          <SearchInput query="" />

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
        <div className="flex px-6 py-2 space-x-6 text-sm border-t border-gray-100">
          <a
            href="#"
            className="flex items-center space-x-1 text-blue-600 border-b-2 border-blue-600 pb-2"
          >
            <Search className="w-4 h-4" />
            <span>All</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
          >
            <Image className="w-4 h-4" />
            <span>Images</span>
          </a>
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

      {/* Search Results */}
      <main className="max-w-3xl mx-auto px-6 py-4">
        <p className="text-sm text-gray-600 mb-4">
          About 97 results (0.42 seconds) • Page 1 of 10
        </p>

        {[...Array(10)].map((_, i) => (
          <div key={i} className="mb-8 group">
            <div className="flex flex-col">
              <div className="flex items-center space-x-1 text-sm text-gray-600 mb-1">
                <span className="mx-2">•</span>
                <span>just now</span>
              </div>
              <a
                href="#"
                className="text-sm text-gray-600 mb-1 group-hover:underline truncate"
              >
                <span className="text-gray-400">https://</span>
                <span className="text-gray-600">example.com</span>
              </a>
              <a
                href="#"
                className="text-xl text-[#1a0dab] group-hover:underline mb-1 font-medium"
              >
                <span className="font-semibold">Example Domain</span>
              </a>
              <p className="text-sm text-gray-600 line-clamp-2">
                This is a sample search result. It has a title, a description,
                and a URL.
              </p>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <SearchResultPagination
          currentPage={1}
          totalPages={10}
          searchParams=""
        />
      </main>
    </div>
  );
};

export default SearchResultsSkeleton;
