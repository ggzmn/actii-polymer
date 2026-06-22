import Card from "@/components/ui/card";
import ContentWrapper from "@/components/ui/content-wrapper";
import { flavors } from "@/constants/menu";
import type { FlavorItem } from "@/entities/ui";

export default function FlavorsCards() {
  return (
    <ContentWrapper>
      {flavors.map((item: FlavorItem) => (
        <Card copyright="ACT II" icon={"/img/content/icon-palomitas.png"}>
          {<img src={item.image} className="w-full h-auto" />}
        </Card>
      ))}
    </ContentWrapper>
  );
}
