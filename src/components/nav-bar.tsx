import type {
  NavItem,
  NavOptions,
  SocialItem,
  SocialMedia,
} from "@/entities/ui";
import { Link, NavLink } from "react-router";

function NavBar({ options, sm }: { options: NavOptions; sm: SocialMedia }) {
  return (
    <nav className="bg-(--color-gradient-blue-5) flex justify-between items-center px-8 py-4 text-(--color-menu-text)  font-bold candal-font-family">
      <div className="flex justify-between items-center gap-4 hover">
        {options.map((option: NavItem) => (
          <NavLink
            className="text-2xl  hover:text-white"
            to={"/" + option.path}
            key={option.path}
          >
            {option.name.toUpperCase()}
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <span className="text-xs">SIGUENOS EN</span>
        <ul className="flex justify-between gap-2 flex-row">
          {sm.map((item: SocialItem) => (
            <Link
              className="hover:opacity-70 cursor-pointer"
              to={item.link}
              target="blank"
            >
              <img className=" font-xs" src={item.image} alt={item.red} />
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
