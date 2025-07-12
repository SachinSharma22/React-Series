import React, { useRef, useState } from "react";

const UpdatingObject = () => {
  const inputRef = useRef(null);
  const [data, setData] = useState({
    name: "sachin",
    address: {
      city: "rasra",
      state: "UP",
    },
  });

  const clickHandler = () => {
    data.name = inputRef.current.value;
    setData({ ...data });
  };
  const changeCity = (city) => {
    data.address.city = city
    setData({...data,address:{...data.address,city}})
  }
  return (
    <div>
      <input type="text" placeholder="enter your name" ref={inputRef} />
      <button onClick={clickHandler}>Updata Name</button>
      <input type="text" placeholder="change city" onChange={(event) => changeCity(event.target.value)} />
      <h3>Name: {data.name}</h3>
      <h3>Name: {data.address.city}</h3>
      <h3>Name: {data.address.state}</h3>
    </div>
  );
};

export default UpdatingObject;
