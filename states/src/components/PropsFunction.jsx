import React from 'react'

const PropsFunction = ({display,name,getuser}) => {
    
  return (
    <div>
      <button onClick={() => display(name)}>Show</button>
        <button onClick={getuser}>Get User</button>
    </div>
  )
}

export default PropsFunction
