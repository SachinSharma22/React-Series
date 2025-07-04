import React from 'react'

const PropsComponent = ({users}) => {
  return (
    <div>
      <h1>Name: {users.name}</h1>
      <h1>Age: {users.age}</h1>
      <h1>Email: {users.email}</h1>
    </div>
  )
}

export default PropsComponent
