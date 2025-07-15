import React from 'react'
import { Link, useParams } from 'react-router'

const UserDetails = () => {
    const paramsData = useParams();
  return (
    <div style={{marginLeft:"20px"}}>
      <h1>User Detail Page </h1>
      <h4>User Id is : {paramsData.id}</h4>
      <h3><Link to="/user">Back</Link></h3>
    </div>
  )
}

export default UserDetails
