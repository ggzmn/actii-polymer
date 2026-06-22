import Card from "@/components/ui/card";
import ContentWrapper from "@/components/ui/content-wrapper";
import { videos } from "@/constants/menu";
import type { VideoItem } from "@/entities/ui";

export default function VideoCards() {
  return (
    <ContentWrapper>
      {videos.map((item: VideoItem) => (
        <Card copyright="ACT II" icon={"/img/content/icon-palomitas.png"}>
          {<img src={item.image} className="w-full h-auto" />}
        </Card>
      ))}
    </ContentWrapper>
  );
}
