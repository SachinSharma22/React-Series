import React, { useRef,useState } from "react";

const DerivedState = () => {
  const [totalUser, setTotalUser] = useState(0);
  const [lastUser, setLastUser] = useState("");
  const [uniqueUser, setUniqueUser] = useState("");
  const [users,setUser] = useState([])
  const inputRef = useRef(null)
  const [uniqueNames,setUniqueNames] = useState(new Set())

  const addHandler = () => {
   const name = inputRef.current.value.trim()
   if(name === '') return

   setUser(prev => [...prev,name])

   setLastUser(inputRef.current.value)
   setTotalUser(totalUser+1);

   if (!uniqueNames.has(name)) {
      // New unique name
      const updatedSet = new Set(uniqueNames);
      updatedSet.add(name);
      setUniqueNames(updatedSet);
      setUniqueUser(updatedSet.size);          // Update unique count only on unique add
    }

   inputRef.current.value = ''
    
    
    
  }
  return (
    <div>
      <h1>Derived State Hook</h1>

      <h2>Total User: {totalUser}</h2>
      <h2>Last User: {lastUser}</h2>
      <h2>Unique User: {uniqueUser}</h2>
      <input type="text" name="" id="" ref={inputRef} />
      <button onClick={addHandler}>Add User</button>
      <br /><br />
      <h2> user List:</h2>
      <ul>
        {
            users.map((user,index) => {
                return(
                   <li key={index}>{user}</li>
                )
            })
        }
      </ul>
    </div>
  );
};

export default DerivedState;
