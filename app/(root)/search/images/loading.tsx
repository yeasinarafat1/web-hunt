import React from "react";

const loading = () => {
  return (
    <section>
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-2 border-blue-500 rounded-full animate-spin"></div>
      </div>
    </section>
  );
};

export default loading;
