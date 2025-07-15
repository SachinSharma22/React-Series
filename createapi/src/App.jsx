import React, { useEffect, useState } from 'react'

const App = () => {
  const [userData,setUserData] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getUserData()
  },[])
  const getUserData = async() => {
    const url = "http://localhost:3000/users"
    let response =  await fetch(url)
    response = await response.json()
    console.log(response)
    setUserData(response)
    setLoading(false)
  }
  console.log(userData)
  return (
    <div>
      <h1>Make Routes and pages for Add User and User List UI </h1>
      <ul style={{display:"flex", justifyContent:"space-around", border:"1px solid black", padding:"5px", listStyle:"none"}}>
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
      </ul>
      {
        !loading ?
        userData.map((user) => (
        <div key={user.id} >
          <ul style={{display:"flex", justifyContent:"space-around", border:"1px solid black", padding:"5px", listStyle:"none"}}>
            <li style={{ padding:"5px"}}>{user.name}</li>
            <li style={{ padding:"5px"}}>{user.age}</li>
            <li style={{ padding:"5px"}}>{user.email}</li>
          </ul>

        </div>
      ))
      :
      <h1>data Loading...</h1>
      }
    </div>
  )
}

export default App
