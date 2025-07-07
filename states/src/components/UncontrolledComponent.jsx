import { useRef } from "react"

const UncontrolledComponent = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        const userName = document.querySelector('#user').value;
        const password = document.querySelector('#pass').value;

        console.log(userName);
        console.log(password)
    }

    const userRef = useRef(null);
    const passRef = useRef(null);

    const submitHandler1 = (event) => {
        event.preventDefault();
        console.log(userRef.current.value);
        console.log(passRef.current.value);
    }

  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form action="" method='post'>
        <input  type="text" id='user' placeholder='enter your name' />
        <br /><br />
        <input  type="password" id='pass' placeholder='enter password' />
        <br /><br />
        <button onClick={submitHandler}>submit</button>
      </form>
      <hr />

      <h1>Uncontrolled Component with useRef()</h1>
      <form action="" method='post'>
        <input ref={userRef} type="text" id='user2' placeholder='enter your name' />
        <br /><br />
        <input ref={passRef} type="password" id='pass2' placeholder='enter password' />
        <br /><br />
        <button onClick={submitHandler1}>submit</button>
      </form>

    </div>
  )
}

export default UncontrolledComponent
