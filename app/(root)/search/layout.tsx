import SearchHeader from "@/app/components/SearchHeader";
import React, { ReactNode, Suspense } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen bg-white">
        <SearchHeader />
        {children}
      </main>
    </Suspense>
  );
};

export default layout;
