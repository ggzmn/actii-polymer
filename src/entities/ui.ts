export interface NavItem {
  path: string;
  name: string;
}

export interface Base {
  image: string;
  imageAlt: string;
}

export interface SocialItem extends Base {
  red: string;
  link: string;
}

export interface FlavorItem extends Base {
  product: string;
}

export interface VideoItem extends Base {
  hashtag: string;
  url: string;
}

export interface ImageItem extends Base {
  description: string;
}

export type NavOptions = NavItem[];
export type SocialMedia = SocialItem[];

export interface SelectedCard extends Base {
  description?: string;
}

export interface GeneralContextValue {
  selected: SelectedCard | null;
  setSelected: (item: SelectedCard | null) => void;
}
