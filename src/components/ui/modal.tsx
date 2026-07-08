import { GeneralContext } from "@/context";
import { useContext, useEffect, useRef } from "react";

function getYoutubeEmbedUrl(url: string) {
  const videoId = new URL(url).searchParams.get("v");
  return videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
    : url;
}

export default function Modal() {
  const { selected, setSelected } = useContext(GeneralContext);
  const closeButtonRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    closeButtonRef.current = null;
    setSelected(null);
  };

  useEffect(() => {
    if (selected) {
      closeButtonRef.current?.focus();
    }
  }, [selected]);

  if (!selected) {
    return null;
  }

  return (
    <div className="fixed cursor-pointer bg-(--color-modal-overlay) h-dvh w-dvw z-100 modal-overlay">
      <div className="flex justify-center content-center bg-(--color-modal-container-bg) p-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 modal-container">
        <div
          ref={closeButtonRef}
          className="close-icon absolute top-0 -right-1"
          onClick={handleClose}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleClose();
            }
          }}
          role="button"
          tabIndex={0}
        />
        <div className="f p-2">
          <div className="min-h-2">
            {selected.url ? (
              <iframe
                src={getYoutubeEmbedUrl(selected.url)}
                title={selected.imageAlt}
                className="aspect-video w-[30vw] max-w-3xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img src={selected.image} alt={selected.imageAlt} />
            )}
          </div>
          <p className="text-base text-white">{selected.description ?? ""}</p>
        </div>
      </div>
    </div>
  );
}
