import Card from "@/components/ui/card";
import ContentWrapper from "@/components/ui/content-wrapper";
import { images } from "@/constants/menu";
import type { ImageItem } from "@/entities/ui";

export default function ImagesCards() {
  return (
    <ContentWrapper>
      {images.map((item: ImageItem) => (
        <Card copyright="ACT II" icon={"/img/content/icon-palomitas.png"}>
          {<img src={item.image} className="w-full h-auto" />}
        </Card>
      ))}
    </ContentWrapper>
  );
}
