import { searchBraveImages } from "@/app/lib/image.action";
import { SearchParams } from "next/dist/server/request/search-params";
import React from "react";

const ImagePage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const searchQuery = ((await searchParams)?.q as string) || "";
  const images = await searchBraveImages(searchQuery);
  console.log(images);

  return <div>page</div>;
};

export default ImagePage;
