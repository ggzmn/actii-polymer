import CardsGrid from "@/components/cards-grid";
import { images } from "@/constants/menu";

export default function ImagesCards() {
  return (
    <CardsGrid
      list={images.map((item) => ({
        image: item.image,
        imageAlt: item.description,
      }))}
    />
  );
}
