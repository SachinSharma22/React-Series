import React, { useState } from "react";

const CheckboxControl = () => {
  const [skills, setSkills] = useState([]);
  const skillsHandler = (event) => {
    console.log(event.target.value,event.target.checked)
    if(event.target.checked){
        setSkills([...skills,event.target.value])
    }else{
        setSkills([...skills.filter((item) => item != event.target.value,)])
    }
  };
  return (
    <div>
      <h1>Checkbox Controller</h1>
      <h2>Select Skills</h2>

      <label htmlFor="php">
        <input
          type="checkbox"
          name="php"
          id="php"
          value="php"
          onChange={skillsHandler}
        />
        PHP
      </label>
      <br /><br />
      <label htmlFor="js">
        <input
          type="checkbox"
          name="js"
          id="js"
          value="js"
          onChange={skillsHandler}
        />
        JS
      </label>
      <br /><br />
      <label htmlFor="java">
        <input
          type="checkbox"
          name="java"
          id="java"
          value="java"
          onChange={skillsHandler}
        />
        JAVA
      </label>
      <br /><br />
      <label htmlFor="py">
        <input
          type="checkbox"
          name="py"
          id="py"
          value="py"
          onChange={skillsHandler}
        />
        PYTHON
      </label>
      <h1>{skills + ","}</h1>
    </div>
  );
};

export default CheckboxControl;
