import NavBar from "@/components/nav-bar";
import Modal from "@/components/ui/modal";
import { menu, social } from "@/constants/menu";
import { GeneralContext, type SelectedCard } from "@/context";
import { useState } from "react";
import { Outlet } from "react-router";

function App() {
  const [selected, setSelected] = useState<SelectedCard | null>(null);

  return (
    <GeneralContext value={{ selected, setSelected }}>
      <Modal />
      <NavBar options={menu} sm={social} />
      <Outlet />
    </GeneralContext>
  );
}

export default App;
