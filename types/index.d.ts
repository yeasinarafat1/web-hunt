// Type definitions for search result data

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
