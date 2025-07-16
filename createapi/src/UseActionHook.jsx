import React, { useActionState } from "react";

const UseActionHook = () => {

    const handleLogin = (prevData, formData) => {
        let name = formData.get('name')
        let password = formData.get('password')
        let regex = /^[A-Z0-9]+$/i
        
       if(name.length > 5){
        return {error: "Name Should only contain 5 character"}
       }else if(!regex.test(password)){
        return {error: "Password not contain any special character"}
       }else{
        return{message:"Login Done"}
       }
    }

    const [data, action, pending] = useActionState(handleLogin)
  return (
    <div style={{textAlign:"center"}}>
        <h1>useActionState Hook in React</h1>
      <form action={action}>
        <input type="text" placeholder="enter name" name="name" />
        <br />
        <br />
        <input type="password" placeholder="enter password" name="password" />
        <br />
        <br />
        <button disabled={pending}>Submit</button>
      </form>
    </div>
  );
};

export default UseActionHook;
