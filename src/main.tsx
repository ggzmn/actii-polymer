import App from "@/App.tsx";
import { menu } from "@/constants/menu.ts";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path={menu[0].path} element={<App />} />
      <Route path={menu[1].path} element={<App />} />
      <Route path={menu[2].path} element={<App />} />
      <Route path={menu[3].path} element={<App />} />
    </Routes>
  </BrowserRouter>,
);
