import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate("/labs")
    }
    const backHandler = () => {
        navigate(-1)
    }
  return (
    <div>
        <div>
      about
    </div>
    <button onClick={clickHandler}>Goto Labs page</button>
    <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default About
