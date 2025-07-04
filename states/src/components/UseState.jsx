import React, { useState } from 'react'

const UseState = () => {

    const [fruitName,setFruitName] = useState("Apple");

    const changeNameHandler = () => {
        setFruitName("Banana");
    }
  return (
    <div>
        <h1>State in ReactJS</h1>
        <h1>{fruitName}</h1>
      <button onClick={changeNameHandler}>Change Fruit name</button>
    </div>
  )
}

export default UseState
