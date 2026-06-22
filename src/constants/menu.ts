import type {
  FlavorItem,
  ImageItem,
  NavItem,
  SocialItem,
  VideoItem,
} from "@/entities/ui";

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

export const flavors: FlavorItem[] = [
  {
    product: "Extra mantequilla",
    image: "/img/content/actii-sabor-extra-mantequilla.png",
  },
  {
    product: "Cinema",
    image: "/img/content/actii-sabor-cinema-dulce.png",
  },
  {
    product: "Mantequilla",
    image: "/img/content/actii-sabor-mantequilla.png",
  },
  {
    product: "Natural",
    image: "/img/content/actii-sabor-natural.png",
  },
  {
    product: "Cheddar",
    image: "/img/content/actii-sabor-cheddar.png",
  },
  {
    product: "Caramelo",
    image: "/img/content/actii-sabor-caramelo.png",
  },
];

export const videos: VideoItem[] = [
  {
    hashtag: "#TuPonesElMomento ACT II",
    image: "/img/content/videoposter-01.jpg",
    url: "https://www.youtube.com/watch?v=Ufo5RADPsEo",
  },
  {
    hashtag: "#TuPonesElMomento ACT II",
    image: "/img/content/videoposter-03.jpg",
    url: "https://www.youtube.com/watch?v=f5tCTKjFtLk",
  },
  {
    hashtag: "#TuPonesElMomento ACT II",
    image: "/img/content/videoposter-02.jpg",
    url: "https://www.youtube.com/watch?v=kyUVQ792O1w",
  },
];

export const images: ImageItem[] = [
  {
    description:
      "¿Qué sientes cuándo ves un comercial en medio de tu video? #Palomitas #ACTII #PopCorn",
    image: "/img/content/imagen1.jpg",
  },
  {
    description:
      "Nada mas extraño que tu jefe te quiera seguir en redes sociales, hahaha, a ver ¿Cuál sería tu reacción? #ACTII #PopCorn",
    image: "/img/content/imagen2.png",
  },
  {
    description:
      "¿Qué es lo más loco qué harías para que te den la contraseña del wifi? #Palomitas #ACTII #PopCorn",
    image: "/img/content/imagen3.jpg",
  },
  {
    description:
      "¡Todos los perros van al cielo! #AdivinaLaPelícula #TúPonesElMomento",
    image: "/img/content/imagen4.jpg",
  },
  {
    description:
      "Desde que aparecieron los memes nos hicieron la vida más fácil a la hora de comunicarnos. #Palomitas #ACTII #PopCorn #Memes",
    image: "/img/content/imagen5.png",
  },
  {
    description:
      "Sea cuál sea tu elección, no olvides comprar hoy mismo en tu tienda más cercana las ricas #Palomitas #ACTII ¿Qué esperas? #PopCorn",
    image: "/img/content/imagen6.png",
  },
  {
    description:
      "Ese ha sido un momento tan incómodo, y seguro a todos les ha pasado alguna vez. ¿Cuéntanos tu experiencia? #Palomitas #ACTII #PopCorn #Memes",
    image: "/img/content/imagen7.png",
  },
];
