import type { ReactNode } from "react";

export default function Card({
  children,
  copyright,
  icon,
  handleClick = () => ({}),
}: {
  children: ReactNode;
  copyright: string;
  icon: string;
  handleClick?: () => void;
}) {
  return (
    <div
      className="flex flex-col justify-center content-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-full">{children}</div>
      <div className="bg-white flex flex-1 justify-between p-2">
        <div className="min-h-2">
          <img src={icon} alt={icon} />
        </div>
        <p className="text-base">{copyright}</p>
      </div>
    </div>
  );
}
