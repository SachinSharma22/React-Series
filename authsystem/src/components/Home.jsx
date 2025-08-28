import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const { user, login } = useContext(AuthContext);
  const [username, setUsername] = useState("");

  if (user) {
    return <h2>You are logged in as {user.username}</h2>;
  }

  return (
    <div className="p-[20px]">
      <input
        type="text"
        className="border p-3 text-xl rounded-2xl"
        placeholder="Enter username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="ml-[20px] border text-white font-semibold bg-pink-500 hover:bg-pink-600 hover:cursor-pointer rounded-2xl px-5 py-3" onClick={() => login(username)}>
        Login
      </button>
    </div>
  );
};

export default Home;
