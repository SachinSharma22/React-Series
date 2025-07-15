import React from 'react'
import { Link,NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
   <div>
     <div style={{
        padding:"10px",
        background:"aqua",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"

    }}>
      <div style={{}}><h1><Link to="/" style={{textDecoration:"none"}}>Sachin Sharma</Link></h1></div>
      <div style={{display:"flex",
        alignItems:"center",
        justifyContent:"space-between"}}>
        <ul style={{display:"flex",
        alignItems:"center",
        justifyContent:"space-between",padding:"10px", listStyle:"none"}}>
            <li style={{padding:"10px"}}><NavLink to="" >Home </NavLink></li>
            <li style={{padding:"10px"}}><NavLink to="/about" >About</NavLink></li>
            <li style={{padding:"10px"}}><NavLink to="/contact" >Contact</NavLink></li>
            <li style={{padding:"10px"}}><NavLink to="/college" >College</NavLink></li>
            <li style={{padding:"10px"}}><NavLink to="/user" >Users</NavLink></li>
            <li style={{padding:"10px"}}><NavLink to="/in/user/login" >Login</NavLink></li>
        </ul>
      </div>
      
    </div>
    <Outlet />
   </div>
  )
}

export default Navbar
