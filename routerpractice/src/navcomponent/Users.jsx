import React from 'react'
import { Link } from 'react-router'

const Users = () => {

    const userData=[
        {id:1,name:"Sachin"},
        {id:2,name:"Saurabh"},
        {id:3,name:"Pawan"},
        {id:4,name:"Rohit"},
        {id:5,name:"Vinod"},
        {id:6,name:"Akash"},
    ]
  return (
    <div style={{marginLeft:"20px"}}>
      <h1>User List Page</h1>
      {
        userData.map((item) => (
            <div>
                <h4><Link to={`/user/${item.id}`}>{item.name}</Link></h4>
            </div>
        ))
      }
    </div>
  )
}

export default Users
