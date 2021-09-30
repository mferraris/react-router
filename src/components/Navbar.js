import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/" exact>
        Home
      </NavLink>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/about">
        About this website
      </NavLink>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/discover">
        Discover movies
      </NavLink>
    </div>
  );
}
