import { createContext } from "react";

export interface SelectedCard {
  image: string;
  alt: string;
  description?: string;
}

interface GeneralContextValue {
  selected: SelectedCard | null;
  setSelected: (item: SelectedCard | null) => void;
}

export const GeneralContext = createContext<GeneralContextValue>({
  selected: null,
  setSelected: () => {},
});
