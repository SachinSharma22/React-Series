import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate("/about")
    }
  return (
    <div>
    <div>
      Support
    </div>
    <button onClick={clickHandler}>Go to about page</button>
    </div>
  )
}

export default Support
