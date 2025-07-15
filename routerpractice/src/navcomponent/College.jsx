import React from 'react'
import { NavLink, Outlet } from 'react-router'

const College = () => {
  return (
    <div 
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        font:"bold"
    }}
    >
        <h3><NavLink to={"/"}>Go to home page</NavLink></h3>
      <h1>College Page</h1> <br /> <br />
      <div>
        <NavLink to="">Student</NavLink>
        <NavLink to="Department">Department</NavLink>
        <NavLink to="CollegeDetails">College Details</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default College
