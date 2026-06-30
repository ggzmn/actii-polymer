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
    imageAlt: "Facebook ACT II México",
    link: "https://www.facebook.com/ACTIIMexico",
  },
  {
    red: "instagram",
    image: "/img/instagram.png",
    imageAlt: "Instagram ACT II México",
    link: "https://www.instagram.com/actiimex",
  },
  {
    red: "youtube",
    image: "/img/youtube.png",
    imageAlt: "YouTube ACT II México",
    link: "https://www.youtube.com/ACTIIMexico",
  },
];

export const flavors: FlavorItem[] = [
  {
    product: "Extra mantequilla",
    image: "/img/content/actii-sabor-extra-mantequilla.png",
    imageAlt: "Palomitas ACT II sabor extra mantequilla",
  },
  {
    product: "Cinema",
    image: "/img/content/actii-sabor-cinema-dulce.png",
    imageAlt: "Palomitas ACT II sabor cinema dulce",
  },
  {
    product: "Mantequilla",
    image: "/img/content/actii-sabor-mantequilla.png",
    imageAlt: "Palomitas ACT II sabor mantequilla",
  },
  {
    product: "Natural",
    image: "/img/content/actii-sabor-natural.png",
    imageAlt: "Palomitas ACT II sabor natural",
  },
  {
    product: "Cheddar",
    image: "/img/content/actii-sabor-cheddar.png",
    imageAlt: "Palomitas ACT II sabor cheddar",
  },
  {
    product: "Caramelo",
    image: "/img/content/actii-sabor-caramelo.png",
    imageAlt: "Palomitas ACT II sabor caramelo",
  },
];

export const videos: VideoItem[] = [
  {
    hashtag: "#TuPonesElMomento ACT II",
    image: "/img/content/videoposter-01.jpg",
    imageAlt: "Video ACT II #TuPonesElMomento",
    url: "https://www.youtube.com/watch?v=Ufo5RADPsEo",
  },
  {
    hashtag: "#TuPonesElMomento ACT II",
    image: "/img/content/videoposter-03.jpg",
    imageAlt: "Video ACT II #TuPonesElMomento",
    url: "https://www.youtube.com/watch?v=f5tCTKjFtLk",
  },
  {
    hashtag: "#TuPonesElMomento ACT II",
    image: "/img/content/videoposter-02.jpg",
    imageAlt: "Video ACT II #TuPonesElMomento",
    url: "https://www.youtube.com/watch?v=kyUVQ792O1w",
  },
];

export const images: ImageItem[] = [
  {
    description:
      "¿Qué sientes cuándo ves un comercial en medio de tu video? #Palomitas #ACTII #PopCorn",
    image: "/img/content/imagen1.jpg",
    imageAlt: "Imagen ACT II - reacción al ver un comercial en video",
  },
  {
    description:
      "Nada mas extraño que tu jefe te quiera seguir en redes sociales, hahaha, a ver ¿Cuál sería tu reacción? #ACTII #PopCorn",
    image: "/img/content/imagen2.png",
    imageAlt: "Imagen ACT II - jefe siguiéndote en redes sociales",
  },
  {
    description:
      "¿Qué es lo más loco qué harías para que te den la contraseña del wifi? #Palomitas #ACTII #PopCorn",
    image: "/img/content/imagen3.jpg",
    imageAlt: "Imagen ACT II - contraseña del wifi",
  },
  {
    description:
      "¡Todos los perros van al cielo! #AdivinaLaPelícula #TúPonesElMomento",
    image: "/img/content/imagen4.jpg",
    imageAlt:
      "Imagen ACT II - adivina la película, todos los perros van al cielo",
  },
  {
    description:
      "Desde que aparecieron los memes nos hicieron la vida más fácil a la hora de comunicarnos. #Palomitas #ACTII #PopCorn #Memes",
    image: "/img/content/imagen5.png",
    imageAlt: "Imagen ACT II - memes y comunicación",
  },
  {
    description:
      "Sea cuál sea tu elección, no olvides comprar hoy mismo en tu tienda más cercana las ricas #Palomitas #ACTII ¿Qué esperas? #PopCorn",
    image: "/img/content/imagen6.png",
    imageAlt: "Imagen ACT II - compra palomitas en tu tienda más cercana",
  },
  {
    description:
      "Ese ha sido un momento tan incómodo, y seguro a todos les ha pasado alguna vez. ¿Cuéntanos tu experiencia? #Palomitas #ACTII #PopCorn #Memes",
    image: "/img/content/imagen7.png",
    imageAlt: "Imagen ACT II - momento incómodo que a todos les ha pasado",
  },
];
