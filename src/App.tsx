import NavBar from "@/components/nav-bar";
import Modal from "@/components/ui/modal";
import { menu, social } from "@/constants/menu";
import { GeneralContext } from "@/context";
import type { SelectedCard } from "@/entities/ui";
import { useState } from "react";
import { Outlet } from "react-router";

function App() {
  const [selected, setSelected] = useState<SelectedCard | null>(null);

  return (
    <GeneralContext value={{ selected, setSelected }}>
      <Modal />
      <NavBar options={menu} sm={social} />
      <main id="main-content" role="main">
        <h1 className="sr-only">PoC ACT II - Made by Gaby(ggzmn)</h1>
        <Outlet />
      </main>
    </GeneralContext>
  );
}

export default App;
