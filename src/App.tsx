import NavBar from "@/components/ui/nav-bar";
import { menu, social } from "@/constants/menu";

function App() {
  return (
    <>
      <NavBar options={menu} sm={social} />
    </>
  );
}

export default App;
