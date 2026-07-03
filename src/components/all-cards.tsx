import CardsGrid from "@/components/cards-grid";
import { flavors, images, videos } from "@/constants/menu";

const all = [
  ...flavors.map((item) => ({ image: item.image, imageAlt: item.product })),
  ...videos.map((item) => ({ image: item.image, imageAlt: item.url })),
  ...images.map((item) => ({ image: item.image, imageAlt: item.description })),
];

export default function AllCards() {
  return <CardsGrid list={all} />;
}
