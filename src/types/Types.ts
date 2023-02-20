export interface SearchResult {
  totalCount: number;
  items: UserData[];
}

export interface UserData {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
  name?: string;
  location?: boolean;
  email?: boolean;
  public_repos?: number;
}
