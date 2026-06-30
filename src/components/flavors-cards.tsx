import CardsGrid from "@/components/cards-grid";
import { flavors } from "@/constants/menu";

export default function FlavorsCards() {
  return (
    <CardsGrid
      list={flavors.map((item) => ({
        ...item,
      }))}
    />
  );
}
