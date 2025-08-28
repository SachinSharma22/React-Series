import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <nav className="p-[10px] flex items-center justify-center" style={{
        background: theme === "light" ? "#eee" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}>
      {user ? (
        <>
          <span>Welcome, {user.username} 🎉</span>
          <button className="ml-[20px] border text-white font-semibold bg-pink-500 hover:bg-pink-600 hover:cursor-pointer rounded-2xl px-5 py-3" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <span>Please login</span>
      )}

        <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
};

export default Navbar;
