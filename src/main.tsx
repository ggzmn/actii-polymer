import App from "@/App.tsx";
import AllCards from "@/components/all-cards";
import FlavorsCards from "@/components/flavors-cards";
import ImagesCards from "@/components/images-cards";
import VideoCards from "@/components/videos-cards";
import { menu } from "@/constants/menu.ts";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path={menu[0].path} element={<FlavorsCards />} />
        <Route path={menu[1].path} element={<VideoCards />} />
        <Route path={menu[2].path} element={<ImagesCards />} />
        <Route path={menu[3].path} element={<AllCards />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
