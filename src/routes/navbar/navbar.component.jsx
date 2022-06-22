import { NavLink } from "react-router-dom";

import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="links-container">
        <NavLink
          to="/"
          className="link"
          style={({ isActive }) =>
            isActive ? { textDecoration: "underline" } : undefined
          }
        >
          Page One
        </NavLink>
        <NavLink
          to="/2"
          className="link"
          style={({ isActive }) =>
            isActive ? { textDecoration: "underline" } : undefined
          }
        >
          Page Two
        </NavLink>
        <NavLink
          to="/3"
          className="link"
          style={({ isActive }) =>
            isActive ? { textDecoration: "underline" } : undefined
          }
        >
          Page Three
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
