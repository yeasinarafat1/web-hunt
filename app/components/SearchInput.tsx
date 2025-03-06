"use client";

import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import type React from "react";
import { useEffect, useState, useRef, type KeyboardEvent } from "react";
import { useDebounce } from "use-debounce";
import { getBraveSearchSuggestions } from "../lib/suggest.action";

const SearchInput = ({ type, query }: { type?: string; query?: string }) => {
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [value] = useDebounce(searchQuery, 300); // Reduced debounce time for better UX
  const router = useRouter();
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!value || value.trim() === "") {
        setSearchSuggestions([]);
        return;
      }

      try {
        const response = await getBraveSearchSuggestions(value);
        if (
          Array.isArray(response) &&
          response.length === 2 &&
          Array.isArray(response[1])
        ) {
          setSearchSuggestions(response[1]);
          // Reset selected index when new suggestions arrive
          setSelectedIndex(-1);
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSearchSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [value]);

  useEffect(() => {
    // Handle clicks outside the suggestions dropdown to close it
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll the selected suggestion into view
  useEffect(() => {
    if (selectedIndex >= 0 && suggestionsRef.current) {
      const selectedElement = suggestionsRef.current.children[
        selectedIndex
      ] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // If a suggestion is selected, use that for the search
    const queryToSearch =
      selectedIndex >= 0 && searchSuggestions[selectedIndex]
        ? searchSuggestions[selectedIndex]
        : searchQuery.trim();

    if (queryToSearch) {
      router.push(`/search?q=${encodeURIComponent(queryToSearch)}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    router.push(`/search?q=${encodeURIComponent(suggestion)}`);
    setShowSuggestions(false);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchSuggestions([]);
    setSelectedIndex(-1);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Only handle keyboard navigation if we have suggestions
    if (!searchSuggestions.length) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault(); // Prevent cursor from moving
        setSelectedIndex((prev) =>
          prev < searchSuggestions.length - 1 ? prev + 1 : prev
        );
        setShowSuggestions(true);
        break;

      case "ArrowUp":
        e.preventDefault(); // Prevent cursor from moving
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;

      case "Enter":
        if (selectedIndex >= 0) {
          e.preventDefault();
          setSearchQuery(searchSuggestions[selectedIndex]);
          handleSearch();
        }
        break;

      case "Escape":
        e.preventDefault();
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;

      case "Tab":
        // Let default tab behavior work, but close suggestions
        setShowSuggestions(false);
        break;
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
            className="w-full py-3 px-12 border text-gray-700 border-gray-200 rounded-full hover:shadow-md focus:shadow-md focus:outline-none focus:border-gray-300 transition-shadow"
            placeholder="Search the web"
            autoComplete="off"
            aria-expanded={showSuggestions}
            aria-autocomplete="list"
            aria-controls={showSuggestions ? "search-suggestions" : undefined}
            aria-activedescendant={
              selectedIndex >= 0 ? `suggestion-${selectedIndex}` : undefined
            }
          />
          {searchQuery && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute inset-y-0 right-0 flex items-center pr-4"
              aria-label="Clear search"
            >
              <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && searchSuggestions.length > 0 && (
          <div
            ref={suggestionsRef}
            id="search-suggestions"
            className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-80 overflow-y-auto"
            role="listbox"
          >
            {searchSuggestions.map((suggestion, index) => (
              <div
                key={index}
                id={`suggestion-${index}`}
                onClick={() => handleSuggestionClick(suggestion)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`flex items-center px-4 py-3 cursor-pointer ${
                  selectedIndex === index ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
                role="option"
                aria-selected={selectedIndex === index}
              >
                <Search className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                <div className="text-sm text-gray-700">{suggestion}</div>
              </div>
            ))}
          </div>
        )}
      </form>

      {/* Search Buttons */}
      {type === "home" && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => handleSearch()}
            className="bg-gray-100 px-4 py-2 text-sm text-gray-800 rounded hover:shadow"
          >
            Search
          </button>
          <button
            onClick={() => {
              // Implement "I'm Feeling Lucky" functionality
              if (searchQuery.trim()) {
                router.push(
                  `/search?q=${encodeURIComponent(
                    searchQuery.trim()
                  )}&lucky=true`
                );
              }
            }}
            className="bg-gray-100 px-4 py-2 text-sm text-gray-800 rounded hover:shadow"
          >
            I'm Feeling Lucky
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
