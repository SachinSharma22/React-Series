import React from 'react'

const RenderComponent = ({data}) => {
  return (
    <div>
      {
        data.map((user) => (
            <div key={user.id}>
                <h3>Name: {user.name}</h3>
                <h3>Age: {user.age}</h3>
                <h3>Id: {user.id}</h3>
                <h3>email: {user.email}</h3>
                <hr />
            </div>
            
        ))
        
      }
      <hr />
    </div>
  )
}

export default RenderComponent
