import type { NavItem, SocialItem } from "@/entities/ui";

export const menu: NavItem[] = [
  {
    name: "sabores",
    path: "",
  },
  {
    name: "video",
    path: "videos",
  },
  {
    name: "imágenes",
    path: "images",
  },
  {
    name: "todos",
    path: "all",
  },
];

export const social: SocialItem[] = [
  {
    red: "facebook",
    image: "/img/facebook.png",
    link: "https://www.facebook.com/ACTIIMexico",
  },
  {
    red: "instagram",
    image: "/img/instagram.png",
    link: "https://www.instagram.com/actiimex",
  },
  {
    red: "youtube",
    image: "/img/youtube.png",
    link: "https://www.youtube.com/ACTIIMexico",
  },
];
