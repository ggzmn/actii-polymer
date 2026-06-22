import App from "@/App.tsx";
import { menu } from "@/constants/menu.ts";
import FlavorsPage from "@/pages/flavors";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import ImagesCards from "./components/images-cards";
import VideoCards from "./components/videos-cards";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path={menu[0].path} element={<FlavorsPage />} />
        <Route path={menu[1].path} element={<VideoCards />} />
        <Route path={menu[2].path} element={<ImagesCards />} />
        <Route
          path={menu[3].path}
          element={
            <>
              <FlavorsPage />
              <VideoCards />
              <ImagesCards />
            </>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);
