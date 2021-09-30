import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavLink
        activeStyle={{ fontWeight: "bold" }}
        style={{ margin: 20, textDecoration: "none" }}
        to="/"
      >
        Discover movies
      </NavLink>

      <NavLink
        activeStyle={{ fontWeight: "bold" }}
        style={{ margin: 20, textDecoration: "none" }}
        to="/about"
      >
        About this website
      </NavLink>
    </div>
  );
}
