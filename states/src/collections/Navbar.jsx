import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav style={{ width:"80vw", display:"flex", alignItems:"center",justifyContent:"space-between",padding:"20px", margin:"20px", marginTop:"10px", paddingTop:"10px"}}>
        <div>Sachin Sharma</div>
        <div>
            <ul style={{listStyle:"none", display:"flex", alignItems:"center",justifyContent:"space-between"}}>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Projects</li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
