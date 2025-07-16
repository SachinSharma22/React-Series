import React, { useState } from "react";

const ColorMixer = () => {
    const [red,setRed] = useState(0)
    const [green,setGreen] = useState(0)
    const [blue,setBlue] = useState(0)
  return (
    <div>
        <div style={{border:"1px solid black", width:"300px",height:"300px", margin:"20px", borderRadius:"10px",  backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></div>
      <label htmlFor="">
        Red: {red} <input type="range" onChange={(e) => setRed(e.target.value) } min={0} max={255} />
      </label>{" "}
      <br />
      <br />
      <label htmlFor="">
        Green: {green} <input type="range" onChange={(e) => setGreen(e.target.value) } min={0} max={255} />
      </label>{" "}
      <br />
      <br />
      <label htmlFor="">
        Blue: {blue} <input type="range" onChange={(e) => setBlue(e.target.value) } min={0} max={255} />
      </label>{" "}
      <br />
      <br />
    </div>
  );
};

export default ColorMixer;
