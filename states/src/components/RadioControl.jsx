import React, { useState } from "react";

const RadioControl = () => {
  const [selectOption, setSelectedOption] = useState("");
  const changeHandler = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          name="payment"
          value="UPI"
          checked={selectOption === "UPI"}
          onChange={changeHandler}
        />
        UPI
      </label>
      <label>
        <input
          type="radio"
          name="payment"
          value="Paypal"
          checked={selectOption === "Paypal"}
          onChange={changeHandler}
        />
        PayPal
      </label>
      <label>
        <input
          type="radio"
          name="payment"
          value="Credit Card"
          checked={selectOption === "Credit Card"}
          onChange={changeHandler}
        />
        Credit Card
      </label>

       <p>Selected: {selectOption || "None"}</p>
    </div>
  );
};

export default RadioControl;
