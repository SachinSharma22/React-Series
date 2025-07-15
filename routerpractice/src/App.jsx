import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./navcomponent/Home";
import About from "./navcomponent/About";
import Contact from "./navcomponent/Contact";
import Navbar from "./navcomponent/Navbar";
import NotFound from "./navcomponent/NotFound";
import College from "./navcomponent/College";
import Student from "./navcomponent/Student";
import Department from "./navcomponent/Department";
import CollegeDetails from "./navcomponent/CollegeDetails";
import Login from "./navcomponent/Login";
import Users from "./navcomponent/Users";
import UserDetails from "./navcomponent/UserDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<Users />} />
          <Route path="/user/:id" element={<UserDetails />} />

           <Route path="in">
          <Route path="/in/user">
          <Route path="/in/user/login" element={<Login />} />
          </Route>
        </Route>
        </Route>

       
        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="collegedetails" element={<CollegeDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
