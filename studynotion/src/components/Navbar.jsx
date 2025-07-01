import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    const clickLoginHandler = () => {
        navigate("/login")
    }
    const clickSignUpHandler = () => {
        navigate("/signup")
    }
  return (
    <div className='bg-black p-2  flex items-center justify-between'>
      <nav className=' w-full flex items-center justify-between '>
        <div className='flex'>
            <p className='bg-white text-2xl flex items-center justify-center ml-1 text-black h-7 w-7 rounded-full text-center font-bold'>S </p>
        <label className='font-semibold px-2 text-white text-2xl '>StudyNotion</label>
        </div>

        <div className='flex items-center justify-between px-6'>
            <NavLink className='text-white my-0 mx-6' to={"/"}>Home</NavLink>
            <NavLink className='text-white my-0 mx-6' to={"/about"}>About</NavLink>
            <NavLink className='text-white my-0 mx-6' to={"/contact"}>Contact</NavLink>
        </div>

        <div>
            <button onClick={clickLoginHandler} className='bg-white text-black m-2 p-1 rounded'>Login</button>
            <button onClick={clickSignUpHandler} className='bg-white text-black m-2 p-1 rounded'>Signup</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
