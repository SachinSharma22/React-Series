import React from 'react'

const ForwardRef = (props) => {
  return (
    <div>
      <input type="text" ref={props.ref}/>
    </div>
  )
}

export default ForwardRef
