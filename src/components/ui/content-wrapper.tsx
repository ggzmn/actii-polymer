import { type ReactNode } from "react";

export default function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="container grid lg:grid-cols-3 gap-4 py-4 px-32 md:grid-cols-2 sm:grid-cols-1">
      {children}
    </div>
  );
}
