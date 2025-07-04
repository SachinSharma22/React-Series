import React, { useState } from 'react'

const InputField = () => {
    const [inputValue,setInputValue] = useState({
        name:'',
        age:'',
        email:''
    })
    const changeHandler = (event) => {
       const {name,value} = event.target
       setInputValue((prev) =>({
        ...prev,
        [name]: value
       }))

    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(inputValue)
        setInputValue({
            name:'',
            age:'',
            email:''
        })
       
    }
  return (
    <div>
        <h1>Get Input Field Value</h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={inputValue.name} onChange={changeHandler} placeholder='enter name' name='name'/><br /><br />
      <input type="text" value={inputValue.age} onChange={changeHandler} placeholder='enter age' name='age'/><br /><br />
      <input type="text" value={inputValue.email} onChange={changeHandler} placeholder='enter email' name='email' /> <br /><br />

      <button>Submit</button>
      </form>
      

      {/* <button onClick={() => setInputValue('')}>Clear</button> */}
    </div>
  )
}

export default InputField
