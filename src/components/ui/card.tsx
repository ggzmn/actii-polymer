import type { ReactNode } from "react";

export default function Card({
  children,
  copyright,
  icon,
  handleClick = () => ({}),
  altIcon,
}: {
  children: ReactNode;
  copyright: string;
  icon: string;
  altIcon: string;
  handleClick?: () => void;
}) {
  return (
    <div
      className="flex flex-col justify-center content-center cursor-pointer"
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="w-full">{children}</div>
      <div className="bg-white flex flex-1 justify-between p-2">
        <div className="min-h-2">
          <img src={icon} alt={altIcon} />
        </div>
        <p className="text-base">{copyright}</p>
      </div>
    </div>
  );
}
