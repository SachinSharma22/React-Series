import React, { useState } from "react";

const UpdateArray = () => {
  const [user, setUser] = useState(["sachin", "saurabh", "pawan"]);

  const [userDetail, setUserDetail] = useState([
    { name: "sachin", age: 23 },
    { name: "Saurabh", age: 21 },
    { name: "pawan", age: 15 },
  ]);

  const changeName = (name) => {
    user[user.length - 1] = name;
    setUser([...user]);
  };

  const updateAge = (age) => {
    userDetail[userDetail.length-1].age = age
    setUserDetail([...userDetail])
  }
  return (
    <div>
      <h1>Updating Array </h1>
      <input
        type="text"
        placeholder="change name"
        onChange={(event) => changeName(event.target.value)}
      />
      {user.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
      <hr />
      <input type="text" placeholder="change age" onChange={(event) => updateAge(event.target.value)} />
      {userDetail.map((item, index) => (
        <div key={index}>
          <h2>{item.name}, {item.age}</h2>
        </div>
      ))}
    </div>
  );
};

export default UpdateArray;
