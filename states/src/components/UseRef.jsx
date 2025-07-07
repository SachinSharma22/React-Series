import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null)
    const h1Ref = useRef(null)

    const inputHandler = () => {
        console.log(inputRef)
        inputRef.current.focus();
        inputRef.current.style.color = 'red'
        inputRef.current.placeholder = "enter Password"
    }
    const toggleHandler = () => {
        if(inputRef.current.style.display != 'none'){
            inputRef.current.style.display='none'
        }else{
            inputRef.current.style.display='inline'
        }
    }

    const unControlRef = useRef(null)

    const hHandler = () => {
        h1Ref.current.style.color = 'green'
    }

    const unControlHandler = () => {
        alert(unControlRef.current.value)
    }
  return (
    <div>
        <button onClick={toggleHandler}>Toggle</button>

      <input ref={inputRef} type="text" placeholder='Enter text here' />
      <button onClick={inputHandler}>Focus on input field</button>

      <h1 ref={h1Ref}>UseRef Hook</h1>
      <button onClick={hHandler}>Handler</button>

        <br /><br /><br />
      <input type="text" ref={unControlRef} />
      <button onClick={unControlHandler}>Control</button>
    </div>
  )
}

export default UseRef
