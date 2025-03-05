import { Image, Map, Newspaper, Search, Video } from "lucide-react";
import { ReactNode } from "react";
export function NavIcon({ type }: { type: string }): ReactNode {
  switch (type) {
    case "all":
      return <Search className="w-4 h-4" />;
    case "images":
      return <Image className="w-4 h-4" />;
    case "videos":
      return <Video className="w-4 h-4" />;
    case "news":
      return <Newspaper className="w-4 h-4" />;
    case "maps":
      return <Map className="w-4 h-4" />; // Using MapPin instead of Map
    default:
      return <Search className="w-4 h-4" />; // Default icon
  }
}
