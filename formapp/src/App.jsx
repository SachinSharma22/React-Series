import React, { useState } from "react";

const App = () => {
  // const [firstName,setFirstName] = useState("")
  // const [lastName,setLastName] = useState("")

  // console.log(firstName);
  // console.log(lastName);

  // const changeFirstNameHandler =(event) => {
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value)
  // }
  // const changeLastNameHandler = (event) => {
  //   // console.log(event.target.value)
  //   setLastName(event.target.value)
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmitHandler = (e) => {
    e.preventDefault();
    console.log(
      "All about you is given Below ----------------------------------"
    );
    console.log(formData);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmitHandler}>
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          onChange={changeHandler}
          name="comments"
          placeholder="enter your comments here"
          value={formData.comments}
        />
        <br />
        <br />
        <input
          type="checkbox"
          name="isVisible"
          onChange={changeHandler}
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I Visible ?</label>
        <br />
        <br />
        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Online-Mode">Online Mode</label>
          <br />
          <br />
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>
        <br />
        <br />
        <label htmlFor="favCar">Tell me your fav Car </label>
        <select
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="thar">Thar</option>
          <option value="legender">Legender</option>
          <option value="defender">Defender</option>
          <option value="tata">Tata</option>
        </select>
        <br />
        {/* <input type="submit" name="" id="" value="submit" /> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
