import { useEffect, useState } from "react";
import React from "react";
import {useNavigate} from "react-router-dom"

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);
  const getUserData = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
    setLoading(false);
  };
  console.log(userData);

  const deleteUser = async (id) => {
    console.log(id);
    const url = "http://localhost:3000/users";
    let response = await fetch(url + "/" + id, {
      method: "delete",
    });
    response = await response.json();
    if (response) {
      alert("record deleted");
      getUserData();
    }
  };

  const editUser = async (id) => {
    navigate("/edit/"+id)
  }
  return (
    <div>
      <h1>Make Routes and pages for Add User and User List UI</h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid black",
          padding: "5px",
          listStyle: "none",
        }}
      >
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
        <li>Action</li>
      </ul>
      {!loading ? (
        userData.map((user) => (
          <div key={user.id}>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-around",
                border: "1px solid black",
                padding: "5px",
                listStyle: "none",
              }}
            >
              <li style={{ padding: "5px" }}>{user.name}</li>
              <li style={{ padding: "5px" }}>{user.age}</li>
              <li style={{ padding: "5px" }}>{user.email}</li>
              <div style={{ display: "flex" }}>
                <li>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </li>
                <li>
                  <button onClick={() => editUser(user.id)}>Edit</button>
                </li>
              </div>
            </ul>
          </div>
        ))
      ) : (
        <h1>data Loading...</h1>
      )}
    </div>
  );
};

export default UserList;
