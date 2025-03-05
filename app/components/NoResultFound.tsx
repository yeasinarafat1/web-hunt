import { SearchX } from "lucide-react";

interface NoResultsFoundProps {
  searchQuery?: string;
  suggestions?: string[];
}

export default function NoResultsFound({
  searchQuery = "",
  suggestions = [
    "Check if your search term is spelled correctly",
    "Try using more general keywords",
    "Try using fewer keywords",
    "Try searching for related terms",
  ],
}: NoResultsFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <SearchX className="w-16 h-16 text-gray-400 mb-4" />

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        No results found
      </h2>

      {searchQuery && (
        <p className="text-lg text-gray-600 mb-6">
          We couldn't find any results for{" "}
          <span className="font-medium">"{searchQuery}"</span>
        </p>
      )}

      <div className="max-w-md">
        <h3 className="text-md font-semibold text-gray-700 mb-2">
          Suggestions:
        </h3>
        <ul className="text-gray-600 space-y-1">
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
