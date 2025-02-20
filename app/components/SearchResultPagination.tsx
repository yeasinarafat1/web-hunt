"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const SearchResultPagination = ({
  searchParams,
  totalPages,
  currentPage,
}: {
  searchParams: string;
  totalPages: number;
  currentPage: number;
}) => {
  const router = useRouter();
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      router.push(`/search?${searchParams}&${params.toString()}`);
      window.scrollTo(0, 0);
    }
  };
  return (
    <div className="mt-8 flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-full ${
            currentPage === 1
              ? "text-gray-300"
              : "text-blue-500 hover:bg-gray-100"
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
          let pageNum: number | "..." = 1;

          if (totalPages <= 7) {
            pageNum = i + 1;
          } else if (currentPage <= 4) {
            if (i === 5) pageNum = "...";
            else if (i === 6) pageNum = totalPages;
            else pageNum = i + 1;
          } else if (currentPage >= totalPages - 3) {
            if (i === 1) pageNum = "...";
            else if (i === 0) pageNum = 1;
            else pageNum = totalPages - (6 - i);
          } else {
            if (i === 1 || i === 5) pageNum = "...";
            else if (i === 0) pageNum = 1;
            else if (i === 6) pageNum = totalPages;
            else pageNum = currentPage + (i - 3);
          }

          return pageNum === "..." ? (
            <span key={i} className="px-2">
              ...
            </span>
          ) : (
            <button
              key={i}
              onClick={() => handlePageChange(pageNum as number)}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                currentPage === pageNum
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full ${
            currentPage === totalPages
              ? "text-gray-300"
              : "text-blue-500 hover:bg-gray-100"
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default SearchResultPagination;
