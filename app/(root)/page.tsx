import { Search, Mic, Camera, Grid, User } from "lucide-react";
import SearchInput from "../components/SearchInput";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-end items-center p-4 space-x-4">
        <a href="#" className="text-sm text-gray-700 hover:underline">
          Gmail
        </a>
        <a href="#" className="text-sm text-gray-700 hover:underline">
          Images
        </a>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Grid className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 bg-blue-500 rounded-full">
          <User className="w-5 h-5 text-white" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center mt-28">
        {/* Logo */}
        <div className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          QueryZen
        </div>

        {/* Search Bar */}
        <SearchInput type="home" />

        {/* Language Options */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
