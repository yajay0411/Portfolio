import React, { useState } from "react";
import { Navigate } from "../../utils/Navigate";
import css from "./Navbar.module.css";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar: React.FC = () => {
  const myNavigate = Navigate();

  const location = useLocation(); // Get the current location

  const isRouteActive = (path: string) => location.pathname === path;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={css.navbarWrapper}>
      {/* menu icon */}
      {!menuOpen && (
        <span className={css.navbarMenuIcon} onClick={() => setMenuOpen(true)}>
          <MenuIcon />
        </span>
      )}
      {menuOpen && (
        <span className={css.navbarMenuIcon} onClick={() => setMenuOpen(false)}>
          <CloseIcon />
        </span>
      )}

      {/* Right side buttons for large screens */}
      <div
        className={`${css.navbarMenuWrapper} ${menuOpen ? css.menuOpen : ""}`}
      >
        <span
          className={`${css.menuItem} ${
            isRouteActive("/") ? `${css.menuActive}` : ""
          }`}
          onClick={() => {
            myNavigate("/", false, { from: "navbar" });
            setMenuOpen(false);
          }}
        >
          Home
        </span>
        <span
          className={`${css.menuItem} ${
            isRouteActive("/about") ? `${css.menuActive}` : ""
          }`}
          onClick={() => {
            myNavigate("/about", false, { from: "navbar" });
            setMenuOpen(false);
          }}
        >
          About
        </span>
        <span
          className={`${css.menuItem} ${
            isRouteActive("/projects") ? `${css.menuActive}` : ""
          }`}
          onClick={() => {
            myNavigate("/projects", false, { from: "navbar" });
            setMenuOpen(false);
          }}
        >
          Projects
        </span>
        <span
          className={`${css.menuItem} ${
            isRouteActive("/contact") ? `${css.menuActive}` : ""
          }`}
          onClick={() => {
            myNavigate("/contact", false, { from: "navbar" });
            setMenuOpen(false);
          }}
        >
          Contact
        </span>
      </div>
    </div>
  );
};

export default Navbar;
