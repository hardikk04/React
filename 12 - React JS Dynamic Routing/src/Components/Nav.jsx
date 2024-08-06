import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex w-full justify-center gap-12 mt-4">
      <NavLink
        className={(e) => {
          return e.isActive ? "text-red-500 text-2xl" : "text-2xl";
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => {
          return e.isActive ? "text-red-500 text-2xl" : "text-2xl";
        }}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => {
          return e.isActive ? "text-red-500 text-2xl" : "text-2xl";
        }}
        to="/contact"
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Nav;
