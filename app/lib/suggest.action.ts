"use server";

import { BraveSearchSuggestResponse } from "@/types";
import { headers } from "next/headers";

type SearchSuggestionResponse = {
  query: string;
  results: string[];
};

export async function getBraveSearchSuggestions(
  query: string,
  country: string = "US",
  count: number = 5
) {
  const BRAVE_API_KEY = process.env.BRAVE_SEARCH_API_KEY;

  if (!BRAVE_API_KEY) {
    throw new Error("BRAVE_API_KEY is not defined in environment variables");
  }

  try {
    const url = `https://search.brave.com/api/suggest?q=${query}&country=${country}&count=${count}`;

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Accept-Encoding": "gzip",
        "X-Subscription-Token": BRAVE_API_KEY,
      },
      cache: "no-store", // Optional: Cache for 60 seconds
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data =
      (await response.json()) as unknown as BraveSearchSuggestResponse;

    return data;
  } catch (error) {
    console.error("Error fetching Brave search suggestions:", error);
    throw error;
  }
}
