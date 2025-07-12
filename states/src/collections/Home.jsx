import React from "react";
import sachin from '../assets/sachin.jpg'

const Home = () => {
  return (
    <div style={{display:"flex",width:"80vw", alignItems:"center", justifyContent:"space-between", padding:"20px", margin:"20px"}}>
      <div style={{width:"40%"}}>
        <h1>Sachin Sharma</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I am highly motivated fullstack developer. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Soluta esse illo corporis dolor amet
          earum sint dolorem natus in hic?
        </p>
      </div>
      <div style={{width:"40%"}}>
        <img style={{width:"300px", height:"400px"}} src={sachin} alt="" />
      </div>
    </div>
  );
};

export default Home;
