import SearchHeader from "@/app/components/SearchHeader";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen bg-white">
      <SearchHeader />
      {children}
    </main>
  );
};

export default layout;
