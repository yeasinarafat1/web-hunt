import {
  Grid,
  Image,
  Map,
  MoreHorizontal,
  Newspaper,
  Search,
  Settings,
  User,
  Video,
} from "lucide-react";
import React from "react";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SearchResultHedder = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const params = new URLSearchParams();
      params.set("q", searchQuery.trim());
      params.set("page", "1");
      router.push(`/search-results?${params.toString()}`);
    }
  };
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center px-6 py-4 justify-around container mx-auto space-x-8">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text flex-shrink-0"
        >
          Search
        </Link>

        <form onSubmit={handleSearch} className="flex-1">
          <SearchInput query={searchQuery} />
        </form>

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
  );
};

export default SearchResultHedder;
