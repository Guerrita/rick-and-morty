//import "@/styles/Header.css";
import logo from "@/assets/Rick-And-Morty-Transparent-Images.png";
import logoMini from "@/assets/logo-mini.png";
import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">
          <img src={logoMini} alt="logo" className="logo-mini" />
        </NavLink>
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
      </div>
        <ul className="navbar-right">
          <li>
            <NavLink to="/character">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/location">Locations</NavLink>
          </li>
          <li>
            <NavLink to="/episode">Episodes</NavLink>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
