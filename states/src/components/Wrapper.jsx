import React from 'react'

const Wrapper = ({children,color="green"}) => {
  return (
    <div style={{color:color, border:"5px solid green", margin:"10px", width:"300px"}}>
      {children}
    </div>
  )
}

export default Wrapper
