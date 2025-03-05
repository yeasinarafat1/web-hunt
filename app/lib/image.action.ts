"use server";

// Server action for image search
export async function searchBraveImages(query: string) {
  // Ensure you're using environment variables for the API key
  const apiKey = process.env.BRAVE_SEARCH_API_KEY;

  if (!apiKey) {
    throw new Error("Brave Search API key is not configured");
  }

  try {
    const response = await fetch(
      `https://api.search.brave.com/res/v1/images/search?q=${encodeURIComponent(
        query
      )}&safesearch=strict&count=20&search_lang=en&country=us&spellcheck=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Accept-Encoding": "gzip",
          "X-Subscription-Token": apiKey,
        },
        cache: "no-store", // Disable caching for fresh results
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch images from Brave Search");
    }

    const data = await response.json();

    // Validate the response using Zod

    // Transform the results to extract only needed information
    return data;
  } catch (error) {
    console.error("Error in Brave Image Search:", error);

    if (error instanceof Error) {
      throw new Error("Invalid response format from Brave Search");
    }

    throw error;
  }
}
