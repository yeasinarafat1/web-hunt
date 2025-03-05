"use server";

import axios from "axios";

export async function searchBrave(query: string, page: number = 1) {
  const apiKey = process.env.BRAVE_SEARCH_API_KEY;
  // Use environment variable for security
  const url = `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(
    query
  )}&summary=1`;

  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Accept-Encoding": "gzip",
        "X-Subscription-Token": apiKey as string,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return null;
  }
}
