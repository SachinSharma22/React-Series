import React, { useEffect, useRef, useState, useTransition } from "react";
import {useFormStatus} from 'react-dom'
import UseState from "./components/UseState";
import Toggle from "./components/Toggle";
import MultiCondition from "./components/MultiCondition";
import PropsComponent from "./components/PropsComponent";
import College from "./components/College";
import Student from "./components/Student";
import DefaultProps from "./components/DefaultProps";
import Wrapper from "./components/Wrapper";
import InputField from "./components/InputField";
import CheckboxControl from "./components/CheckboxControl";
import RadioControl from "./components/RadioControl";
import RenderComponent from "./components/RenderComponent";
import College1 from "./components/College1";
import Counter from "./components/Counter";
import UseRef from "./components/UseRef";
import UncontrolledComponent from "./components/UncontrolledComponent";
import PropsFunction from "./components/PropsFunction";
import ForwardRef from "./components/ForwardRef";
import DerivedState from "./components/DerivedState";
import UpdatingObject from "./components/UpdatingObject";
import UpdateArray from "./components/UpdateArray";
import UseActionState from "./components/UseActionState";
import Navbar from "./collections/Navbar";
import Home from "./collections/Home";
import Collage from "./components/Collage";
import { SubjectContext } from "./components/ContextData";


const App = () => {
  // If you want to pass the variable of your data in  your component then
  // const userName = "sachin ";
  // const age = 23;
  // const email = "sachin@test.com";
  // const userObject1 = {
  //   name: "Sachin Sharma",
  //   age: "23",
  //   email: "sachin@test.com",
  // };
  // const userObject2 = {
  //   name: "Saurabh Sharma",
  //   age: "21",
  //   email: "saurabh@test.com",
  // };

  // const collegeNames = ["NIT", "MIT", "IIT", "IIIT"];
  // const [student, setStudent] = useState("bhaskar");
  // return (
  //   <div>
  //     <hr />
  //     <UseState />
  //     <hr />
  //     <Toggle />
  //     {
  //       student === '' ? null : <Student name={student} />

  //     }
  //     <button onClick={() => setStudent("Ravi")}>Change Name</button>

  //     <hr />
  //     <College name={collegeNames[0]} />
  //     <College name={collegeNames[1]} />
  //     <College name={collegeNames[2]} />
  //     <College name={collegeNames[3]} />
  //     <hr />
  //     <MultiCondition />
  //     <hr />
  //     {/* <PropsComponent name="sahin" age={23} email="sachin@gmail.com" /> */}

  //     {/* passing variables */}
  //     {/* <PropsComponent name={userName} age={age} email={email} /> */}

  //     {/* Passing objects as props */}
  //     <PropsComponent users={userObject1}/>
  //     <hr />
  //     <PropsComponent users={userObject2}/>

  //     {/* Default Props */}
  //     <hr />
  //     <DefaultProps name="krishna"/>

  //     {/* Passing jsx */}
  //     <Wrapper color={'orange'}>
  //       <h1>Hello, everyone</h1>
  //     </Wrapper>
  //     <Wrapper color={'seagreen'}>
  //       <h1>Hello, Saurabh</h1>
  //       <h2 style={{color:"red"}}>How are you?</h2>
  //     </Wrapper>

  //     <Wrapper>
  //       <h1>Hello, everyone</h1>
  //     </Wrapper>
  //   </div>
  // )

  // const users = [
  //   {
  //     name: "sachin",
  //     age: "23",
  //     email: "sachin@test.com",
  //     id: "1",
  //   },
  //   {
  //     name: "sachin1",
  //     age: "231",
  //     email: "sachin1@test.com",
  //     id: "2",
  //   },
  //   {
  //     name: "sachin2",
  //     age: "223",
  //     email: "sachin2@test.com",
  //     id: "3",
  //   },
  //   {
  //     name: "sachin4",
  //     age: "24",
  //     email: "sachin4@test.com",
  //     id: "4",
  //   },
  // ];

  //College Data
  // const collegeData = [
  //   {
  //     name: "IET Alwar",
  //     city: "Alwar",
  //     website: "www.iet.com",
  //     student: {
  //       name: "sachin",
  //       age: "23",
  //       email: "sachin@test.com",
  //     },
  //   },
  //   {
  //     name: "IIT Delhi",
  //     city: "Delhi",
  //     website: "www.iit.com",
  //     student: {
  //       name: "sachin1",
  //       age: "23",
  //       email: "sachin1@test.com",
  //     },
  //   },
  //   {
  //     name: "NIT Rurki",
  //     city: "Rurki",
  //     website: "www.nit.com",
  //     student: {
  //       name: "sachin2",
  //       age: "23",
  //       email: "sachin2@test.com",
  //     },
  //   },
  //   {
  //     name: "MIT Pune",
  //     city: "Pune",
  //     website: "www.mit.com",
  //     student: {
  //       name: "sachin3",
  //       age: "23",
  //       email: "sachin3@test.com",
  //     },
  //   },
  // ];
  // return (
  //   <div>
  //     {/* <InputField /> */}
  //     {/* <CheckboxControl /> */}
  //     {/* <RadioControl /> */}
  //     {/* <RenderComponent data={users}/> */}

  //     {
  //       collegeData.map((college, index) => (
  //           <div key={index}>
  //               <College1 college={college} />
  //           </div>
  //       ))
  //     }

  //   </div>
  // )

  // useEffect Handling dependency
  // useEffect(() => {
  //   //call every time
  // })

  //  useEffect(() => {
  //   //call only once
  // },[])

  //  useEffect(() => {
  //   //call on changing single state
  // },[state1])

  //  useEffect(() => {
  //   //call call on changing both state
  // }[state1,state2])

  // const [count, setCount] = useState(0);
  // const [data, setData] = useState(0);

  // useEffect(() => {
  //   counterFunction();
  // }, [count, data]);

  // useEffect(() => {
  //   callOnes();
  // },[])

  // function counterFunction() {
  //   console.log("Counter: " + count);
  // }
  // const callOnes = () => {
  //   console.log("Call Ones Data: " + data);
  // };

  // return (
  //   // <div>
  //   //   <h1>useEffect Hook</h1>
  //   //   <button onClick={() => setCount(count + 1)}>Counter {count}</button>
  //   //   <button onClick={() => setData(data + 1)}>Data: {data}</button>
  //   //   <Counter counter={count} data={data}/>
  //   // </div>

  //   <div>
  //     {/* <h1>Handle Props Side Effect with useEffect in component.</h1>
  //     <Counter counter={count} data={data}/> */}

  //     {/* useRef hook */}

  //     {/* <h1>useRef Hook</h1>
  //     <UseRef /> */}

  //     <UncontrolledComponent />
  //   </div>

  // );
   

  //passing function as a props

  // function displayAlter (name) {
  //   alert("Hello " + name)
  // } 
  // function getUser () {
  //   alert("This is get user function")
  // }

  // const forRef = useRef(null)

  // const handleForward = () => {
  //   forRef.current.value = 20000;
  // }

  //handle form submit

  
  // const handleSubmit = async() => {
  //   await new Promise(res=>setTimeout(res,2000));
  //   console.log("form submitted")
  // }

  // function CustomerForm() {
  //   const {pending} = useFormStatus()
  //   console.log(pending)
  //   return (
  //     <div>
  //     <input type="text" placeholder="enter name" /> <br /><br />
  //     <input type="password" placeholder="enter password"/> <br /><br />
  //     <button disabled={pending}>{pending ? 'Submiting...' : "Submit"}</button>
  //   </div>
  //   )
  // }

  // const [pending,startTransition] = useTransition();

  // const handleTrans = () => {
  //   startTransition(async() => {
  //     await new Promise(res => setTimeout(res,2000))
  //   })
  // }

  // return(
  //   // <div>
  //   //   <PropsFunction display={displayAlter} name="aman" getuser={getUser}/>
  //   //   <PropsFunction display={displayAlter} name="rohit" />
  //   //   <PropsFunction display={displayAlter} name="shyam" />
  //   //   <PropsFunction display={displayAlter} name="ajeet" />
  //   // </div>

  //   // <div>
  //   //   <h1>Forward ref</h1>
  //   //   <ForwardRef ref={forRef} />
  //   //   <button onClick={handleForward}>Forward</button>
  //   // </div>
     
  //   // <div>
  //   //   <h1>useFormStatus hook</h1>
  //   //   <form action={handleSubmit}>
  //   //     <CustomerForm />
  //   //   </form>
  //   //   {
  //   //     pending ?
  //   //     "pending..." :
  //   //     null
  //   //   }
  //   //   <button disabled={pending} onClick={handleTrans}>transition</button>
  //   // </div>

  //   // Derived state

  //   <div>
  //     {/* <DerivedState /> */}
  //     {/* <UpdatingObject /> */}
  //     {/* <UpdateArray /> */}
  //     <UseActionState />
  //   </div>
  // )

  const [subject,setSubject] = useState('')

  return(
    
    <div style={{background:"Yellow", padding:10}}>
      <SubjectContext.Provider value={subject}>
        <select value={subject} onChange={(e) => setSubject(e.target.value)} name="" id="">
          <option value="*">Select an Option</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="C++">C++</option>
        </select>
        <h1>Context API</h1>
        <button onClick={() => setSubject('')}>Clear Subject</button>
      <Collage />
      </SubjectContext.Provider>
    </div>
  )

  //Portfolio website return
  // return(
  //   <div>
  //     <Navbar />
  //     <Home />
  //   </div>
  // )

};

export default App;
