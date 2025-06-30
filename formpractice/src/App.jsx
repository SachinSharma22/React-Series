import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    code: "",
    comment: true,
    candidates: true,
    offer: true,
    mode: "",
  });

  const changeHandler = (event) => {
    const {name, type, value, checked} = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("------------------------------------- Your All Data ------------------------------------");
    console.log(formData);
  };
  return (
    <div className="flex flex-col w-[500px] items-center justify-center my-5 mx-auto">
      <form
        className="flex flex-col items-left justify-start m-5"
        onSubmit={submitHandler}
      >
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={changeHandler}
            className="border-[1px] w-full"
            type="text"
            value={formData.firstName}
            name="firstName"
            id="firstName"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={changeHandler}
            className="border-[1px] w-full"
            type="text"
            value={formData.lastName}
            name="lastName"
            id="lastName"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={changeHandler}
            className="border-[1px] w-full"
            type="text"
            value={formData.email}
            name="email"
            id="email"
            placeholder="email address"
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <select
            onChange={changeHandler}
            className="border-[1px] w-full flex-start"
            name="country"
            id="country"
            value={formData.country}
          >
            <option value="india">INDIA</option>
            <option value="russia">RUSSIA</option>
            <option value="esrial">Esrial</option>
          </select>
        </div>
        <div>
          <label htmlFor="address">Street Address</label>
          <input
            onChange={changeHandler}
            className="border-[1px] w-full"
            type="text"
            value={formData.address}
            name="address"
            id="address"
            placeholder="street address"
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            onChange={changeHandler}
            className="border-[1px] w-full"
            type="text"
            value={formData.city}
            name="city"
            id="city"
            placeholder="City"
          />
        </div>
        <div>
          <label htmlFor="state">State/ Province</label>
          <input
            onChange={changeHandler}
            className="border-[1px] w-full"
            type="text"
            value={formData.state}
            name="state"
            id="state"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="code">ZIP/ Postal Code</label>
          <input
            onChange={changeHandler}
            className="border-[1px] w-full"
            type="text"
            value={formData.code}
            name="code"
            id="code"
            placeholder="Code"
          />
        </div>
        <div>
          <b>By Email</b> <br />
          <input
            onChange={changeHandler}
            type="checkbox"
            name="comment"
            id="comment"
            checked={formData.comment}
          />
          <label className="pl-1 font-semibold" htmlFor="comment">
            Comments
            <p className="pl-4 font-normal">
              Get notified when someones posts a comment on a posting.
            </p>
          </label>
          <input
            onChange={changeHandler}
            type="checkbox"
            name="candidates"
            id="candidates"
            checked={formData.candidates}
          />
          <label className="pl-1 font-semibold" htmlFor="candidates">
            Candidates{" "}
            <p className="pl-4 font-normal">
              Get notified when a candidate applies for a job.
            </p>
          </label>
          <input
            onChange={changeHandler}
            type="checkbox"
            name="offer"
            id="offer"
            checked={formData.offer}
          />
          <label className="pl-1 font-semibold" htmlFor="comment">
            Offers{" "}
            <p className="pl-4 font-normal">
              Get notified when a candidate accepts or rejects an offer.
            </p>
          </label>
        </div>
        <div>
          <h2 className="font-bold">Push Notifications</h2>
          <p className="mb-3">
            These are delivered bia SMS to your mobile phone.
          </p>
          <input
            onChange={changeHandler}
            type="radio"
            name="mode"
            id="Everything"
            value="Everything"
            checked={formData.mode === "Everything"}
          />
          <label className="pl-3" htmlFor="mode">
            Everything
          </label>{" "}
          <br />
          <input
            onChange={changeHandler}
            type="radio"
            name="mode"
            id="same"
            value="Same as email"
            checked={formData.mode === "Same as email"}
          />
          <label className="pl-3" htmlFor="mode">
            Same as email
          </label>
          <br />
          <input
            onChange={changeHandler}
            type="radio"
            name="mode"
            id="nono"
            value="No push notification"
            checked={formData.mode === "No push notification"}
          />
          <label className="pl-3" htmlFor="mode">
            No push notifications
          </label>
        </div>
        <button className="bg-blue-800 text-white p-2 flex item-left w-[60px] mt-2 rounded pl-3.5  text-center">
          Save
        </button>
      </form>
    </div>
  );
};

export default App;
