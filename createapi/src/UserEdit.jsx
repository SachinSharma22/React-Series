import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserList from "../UserList";

const UserEdit = () => {
    const navigate = useNavigate()
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const url = "http://localhost:3000/users/" + id;

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    console.log(id);
    
    let response = await fetch(url);
    response = await response.json();
    console.log(response);

    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  };

  const updateUserDetail = async () => {
    console.log(name,age,email)
    let response = await fetch(url,{
        method:"Put",
        body:JSON.stringify({name,age,email})
    })
    response = await response.json()
    console.log(response)
    if(response) {
        alert("Data Updated Successfully")
        navigate('/userlist')
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Edit User Details</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="user name"
      />{" "}
      <br />
      <br />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="user age"
      />{" "}
      <br />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="user email"
      />{" "}
      <br />
      <br />
      <button onClick={updateUserDetail}>Update User</button>
    </div>
  );
};

export default UserEdit;
