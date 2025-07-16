import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div>
        <NavLink
          style={({ isActive }) => ({
            margin: "10px",
            padding: "10px",
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "blue" : "black",
          })}
          to="/userlist"
        >
          User List
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            margin: "10px",
            padding: "10px",
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "blue" : "black",
          })}
          to="/useradd"
        >
          Add New User
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
