import Card from "@/components/ui/card";
import ContentWrapper from "@/components/ui/content-wrapper";
import { GeneralContext } from "@/context";
import type { SelectedCard } from "@/entities/ui";
import { useContext } from "react";

export default function CardsGrid({ list }: { list: SelectedCard[] }) {
  const { setSelected } = useContext(GeneralContext);

  return (
    <ContentWrapper>
      {list.map((item) => (
        <Card
          key={item.image}
          copyright="ACT II"
          altIcon="Icon's ACT II"
          icon={"/img/content/icon-palomitas.png"}
          handleClick={() => setSelected({ ...item })}
        >
          {
            <img
              src={item.image}
              className="w-full h-auto"
              alt={item.imageAlt}
            />
          }
        </Card>
      ))}
    </ContentWrapper>
  );
}
