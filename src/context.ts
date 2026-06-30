import type { GeneralContextValue } from "@/entities/ui";
import { createContext } from "react";

export const GeneralContext = createContext<GeneralContextValue>({
  selected: null,
  setSelected: () => {},
});
