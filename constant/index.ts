interface NavLink {
  type: string;
  href: string;
  label: string;
}
export const searchNavLinks: NavLink[] = [
  {
    type: "all",
    href: "/search",
    label: "All",
  },
  {
    type: "images",
    href: "/search/images",
    label: "Images",
  },
  {
    type: "videos",
    href: "/search/videos",
    label: "Videos",
  },
  {
    type: "news",
    href: "/search/news",
    label: "News",
  },
  {
    type: "maps",
    href: "/search/maps",
    label: "Maps",
  },
];
