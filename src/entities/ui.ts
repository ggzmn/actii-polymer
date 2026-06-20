export interface NavItem {
  path: string;
  name: string;
}

export interface SocialItem {
  red: string;
  image: string;
  link: string;
}

export type NavOptions = NavItem[];
export type SocialMedia = SocialItem[];
