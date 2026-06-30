import CardsGrid from "@/components/cards-grid";
import { videos } from "@/constants/menu";

export default function VideoCards() {
  return (
    <CardsGrid
      list={videos.map((item) => ({
        image: item.image,
        imageAlt: item.url,
      }))}
    />
  );
}
