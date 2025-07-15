import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [usersData, setUsersData] = useState([])
  useEffect(() => {
    getUserData()
  },[]);
  async function getUserData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url)
    response = await response.json()
    // console.log(response.users)
    setUsersData(response.users)

  }
   console.log(usersData)
  return <div>
    <h1>Fetch Data from API</h1>
    {
      usersData.map((user) => (
       <div key={user.id}>
         <h3>{user.firstName}</h3>
       </div>
      ))
    }
  </div>;
};

export default App;
