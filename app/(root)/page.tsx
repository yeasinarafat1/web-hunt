import { Search, Mic, Camera, Grid, User } from "lucide-react";
import SearchInput from "../components/SearchInput";

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
          Search
        </div>

        {/* Search Bar */}
        <SearchInput type="home" />

        {/* Language Options */}
        <div className="mt-8 text-sm text-gray-700">
          <span>Google offered in: </span>
          <a href="#" className="text-blue-600 hover:underline mx-1">
            हिन्दी
          </a>
          <a href="#" className="text-blue-600 hover:underline mx-1">
            বাংলা
          </a>
          <a href="#" className="text-blue-600 hover:underline mx-1">
            తెలుగు
          </a>
          <a href="#" className="text-blue-600 hover:underline mx-1">
            मराठी
          </a>
          <a href="#" className="text-blue-600 hover:underline mx-1">
            தமிழ்
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full bg-gray-100">
        <div className="px-8 py-3 border-b border-gray-200">
          <span className="text-gray-600 text-sm">India</span>
        </div>
        <div className="px-8 py-3 flex justify-between text-sm text-gray-600">
          <div className="space-x-6">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Advertising
            </a>
            <a href="#" className="hover:underline">
              Business
            </a>
            <a href="#" className="hover:underline">
              How Search works
            </a>
          </div>
          <div className="space-x-6">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
