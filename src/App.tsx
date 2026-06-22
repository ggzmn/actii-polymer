import NavBar from "@/components/nav-bar";
import { menu, social } from "@/constants/menu";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <NavBar options={menu} sm={social} />
      <Outlet />
    </>
  );
}

export default App;
