import { searchBraveImages } from "@/app/lib/image.action";
import { SearchParams } from "next/dist/server/request/search-params";
import React from "react";

const ImagePage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const searchQuery = ((await searchParams)?.q as string) || "";
  const images: BraveImageSearchResponse = await searchBraveImages(searchQuery);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-1 md:px-3">
      {images.results.map((image) => (
        <div key={image.thumbnail.src} className="group relative">
          <a
            href={image.thumbnail.src}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={image.thumbnail.src}
                alt={image.title}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                loading="lazy"
              />
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-900 truncate">{image.title}</p>
              <div className="flex items-center mt-1">
                <img
                  src={image.meta_url.favicon}
                  alt={image.source}
                  className="w-4 h-4 mr-1"
                />
                <p className="text-sm text-gray-500">{image.source}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};
export default ImagePage;
