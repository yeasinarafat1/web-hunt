"use client";

import { Settings, Grid, User } from "lucide-react";
import SearchInput from "./SearchInput";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { searchNavLinks } from "@/constant";
import { cn } from "../lib/utils";
import { NavIcon } from "./NavIcon";

// Remove the Suspense from inside this component
const SearchHeader = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center px-6 py-4 justify-around container ms space-x-8">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text flex-shrink-0"
        >
          QueryZen
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
        {searchNavLinks.map((navLink) => {
          const isActive = pathName === navLink.href;
          return (
            <Link
              key={navLink.href}
              href={`${navLink.href}?q=${searchQuery}`}
              className={cn(
                "flex items-center space-x-1 ",
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                  : "text-gray-600 hover:text-blue-600"
              )}
            >
              <NavIcon type={navLink.type} />
              <span>{navLink.label}</span>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default SearchHeader;
