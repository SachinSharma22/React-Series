import React from "react";
import Students from "./Students";

const College1 = ({ college }) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        borderBottom: "2px solid black",
        padding: "10px",
        borderRadius: "10px",
        margin: "10px",
      }}
    >
      <h1> Name: {college.name}</h1>
      <ul>
        <li>City: {college.city}</li>
        <li>Website: {college.website}</li>
        <li>
          <Students student={college.student} />
        </li>
      </ul>
    </div>
  );
};

export default College1;
