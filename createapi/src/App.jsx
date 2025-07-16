import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserAdd from "./UserAdd";
import UserList from "../UserList";
import NavBar from "./NavBar";
import { Navigate } from "react-router-dom";
import UserEdit from "./UserEdit";
import UseActionHook from "./UseActionHook";
import ColorMixer from "./ColorMixer";

const App = () => {
  // return (
  //   <div>
  //     <NavBar />
  //     <Routes>
  //       <Route path="/" element={<Navigate to="/userlist" />} />
  //       <Route path="/useradd" element={<UserAdd />} />
  //       <Route path="/userlist" element={<UserList />} />
  //       <Route path="/edit/:id" element={<UserEdit />} />
  //     </Routes>
  //   </div>
  // );
   
  //useActionState hook example
  return(
    <div>
      {/* <UseActionHook /> */}
      <ColorMixer />
    </div>
  )
};

export default App;
