export interface NavItem {
  path: string;
  name: string;
}

export interface SocialItem {
  red: string;
  image: string;
  link: string;
}

export interface FlavorItem {
  product: string;
  image: string;
}

export interface VideoItem {
  hashtag: string;
  image: string;
  url: string;
}

export interface ImageItem {
  description: string;
  image: string;
}

export type NavOptions = NavItem[];
export type SocialMedia = SocialItem[];
