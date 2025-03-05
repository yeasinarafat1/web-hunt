import React from "react";

import Link from "next/link";
import SearchInput from "@/app/components/SearchInput";
import SearchResultPagination from "@/app/components/SearchResultPagination";
import { SearchParams } from "next/dist/server/request/search-params";
import { searchBrave } from "@/app/lib/search.action";
import WifiLoader from "@/app/components/SearchLoader";
import ShowSearchResult from "@/app/components/ShowSearchResult";
import { Search } from "lucide-react";
import NoResultsFound from "@/app/components/NoResultFound";

export default async function SearchResults({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchQuery = ((await searchParams)?.q as string) || "";
  const currentPage = Number((await searchParams)?.page) || 1;

  const searchResut = await searchBrave(searchQuery, currentPage);

  const webResult = searchResut?.web?.results;

  // Mock search results
  const resultsPerPage = 10;
  const totalResults = 97; // Mock total results
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  return (
    <section className="max-w-3xl mx-auto px-6 py-4">
      <p className="text-sm text-gray-600 mb-4">
        About {totalResults.toLocaleString()} results (0.42 seconds) • Page{" "}
        {currentPage} of {totalPages}
      </p>
      {!webResult && <WifiLoader />}

      {webResult &&
        webResult?.map((result: any, index: number) => (
          <ShowSearchResult key={index} result={result} />
        ))}

      {/* Pagination */}
      {/* <SearchResultPagination
          currentPage={currentPage}
          totalPages={totalPages}
          searchParams={searchQuery}
        /> */}
    </section>
  );
}
