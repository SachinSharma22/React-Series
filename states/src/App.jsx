import React, { useState } from 'react'
import UseState from './components/UseState'
import Toggle from './components/Toggle'
import MultiCondition from './components/MultiCondition'
import PropsComponent from './components/PropsComponent'
import College from './components/College'
import Student from './components/Student'

const App = () => {

  // If you want to pass the variable of your data in  your component then 
  const userName = "sachin "
  const age = 23;
  const email = "sachin@test.com"
  const userObject1 = {
    name:"Sachin Sharma",
    age:"23",
    email:"sachin@test.com"
  }
  const userObject2 = {
    name:"Saurabh Sharma",
    age:"21",
    email:"saurabh@test.com"
  }

  const collegeNames = ['NIT','MIT','IIT',"IIIT"]
  const [student,setStudent] = useState("bhaskar");
  return (
    <div>
      <hr />
      <UseState />
      <hr />
      <Toggle />
      {
        student === '' ? null : <Student name={student} />
        
      }
      <button onClick={() => setStudent("Ravi")}>Change Name</button>

      <hr />
      <College name={collegeNames[0]} />
      <College name={collegeNames[1]} />
      <College name={collegeNames[2]} />
      <College name={collegeNames[3]} />
      <hr />
      <MultiCondition />
      <hr />
      {/* <PropsComponent name="sahin" age={23} email="sachin@gmail.com" /> */}

      {/* passing variables */}
      {/* <PropsComponent name={userName} age={age} email={email} /> */}

      {/* Passing objects as props */}
      <PropsComponent users={userObject1}/>
      <hr />
      <PropsComponent users={userObject2}/>
    </div>
  )
}

export default App
