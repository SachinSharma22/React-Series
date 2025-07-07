import React, { useState } from "react";
import styled from "styled-components";

const Counter = ({ counter, data }) => {
  const getCounter = () => {
    console.log("Call only");
  };
  const MyButton = styled.button`
    background-color: ${(props) => (props.primary ? "#007bff" : "#6c757d")};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => (props.primary ? "#0056b3" : "#5a6268")};
    }
  `;
  const [cardStyle, setCarStyle] = useState({
    border: "1px solid #000",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #000",
    margin: "10px",
    text: "#ccc",
  });

  useState(() => {
    getCounter();
  }, []);
  return (
    <div>
      <h1 style={cardStyle}>Counter Component</h1>
      <h1 style={cardStyle}>{counter}</h1>
      <h1 style={{ cardStyle }}>{data}</h1>
       <MyButton primary>Primary Button</MyButton>
      <MyButton style={{ marginLeft: '10px' }}>Secondary Button</MyButton>
    </div>
  );
};

export default Counter;
