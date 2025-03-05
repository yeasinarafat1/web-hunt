// Type definitions for search result data
interface NavLink {
  type: string;
  href: string;
  Icon?: React.ComponentType<any>; // Optional since we'll handle it in the helper
  label: string;
}
interface MetaUrl {
  scheme: string;
  netloc: string;
  hostname: string;
  favicon: string;
  path: string;
}

interface Profile {
  name: string;
  url: string;
  long_name: string;
  img: string;
}

interface ClusterItem {
  title: string;
  url: string;
  is_source_local: boolean;
  is_source_both: boolean;
  description: string;
  family_friendly: boolean;
}

interface SearchResult {
  title: string;
  url: string;
  is_source_local: boolean;
  is_source_both: boolean;
  description: string;
  page_age: string;
  profile: Profile;
  language: string;
  family_friendly: boolean;
  type: string;
  subtype: string;
  is_live: boolean;
  meta_url: MetaUrl;
  age: string;
  cluster?: ClusterItem[];
}

// For the component props
interface ShowSearchResultProps {
  result: SearchResult;
}

interface BraveImageSearchResponse {
  type: string;
  query: {
    original: string;
    altered: string;
    spellcheck_off: boolean;
    show_strict_warning: boolean;
  };
  results: BraveImageResult[];
  extra: {
    might_be_offensive: boolean;
  };
}

interface BraveImageResult {
  type: string;
  title: string;
  url: string;
  source: string;
  page_fetched: string;
  thumbnail: {
    src: string;
  };
  properties: {
    url: string;
    placeholder: string;
  };
  meta_url: {
    scheme: string;
    netloc: string;
    hostname: string;
    favicon: string;
    path: string;
  };
  confidence: string;
}

interface ImageResult {
  id: string;
  title: string;
  url: string;
  source: string;
  thumbnail: string;
  sourceUrl: string;
  sourceFavicon: string;
}
