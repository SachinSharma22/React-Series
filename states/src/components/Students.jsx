import React from 'react'

const Students = ({student}) => {
  return (
    <div>
        Student: 
      <ul>
        <li>{student.name}</li>
        <li>{student.age}</li>
        <li>{student.email}</li>
      </ul>
    </div>
  )
}

export default Students
