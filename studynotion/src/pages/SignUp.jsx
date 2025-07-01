import React, { useState } from "react";
import user from "../assets/user.png";

const SignUp = () => {
  const [selectedField, setSelectedField] = useState("student");
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmP:""
  })
  const changeHandler = (event) => {
    const{name,value,type} = event.target;
    setFormData((prevFormdata) => {
      return {
        ...prevFormdata,
        [name] : value
      }
    })

  }
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("--------------------------- all your data ----------------------------")
    console.log(selectedField)
    console.log(formData)

    setFormData({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmP:""
    })
  }
  return (
    <div className="flex items-center justify-between m-3">
      <div className="w-1/2">
        <div>
          <h2 className="font-semibold text-3xl">
            Join millions learning to code with StudyNotion for free
          </h2>
          <p className="text-xl">
            Build skills for today, tommarow, and beyond.
          </p>
          <p className="font-semibold text-blue-500 italic">
            Education to future-proof your career
          </p>
        </div>
        <div className="border-[1px] bg-gray-400 flex items-center justify-center w-[250px] border-gray-400 rounded-2xl">
          <button
            onClick={() => setSelectedField("student")}
            className={`px-4 py-2 ${
              selectedField === "student"
                ? "bg-blue-600 rounded-2xl text-white"
                : "bg-gray-600"
            } `}
            
          >
            Student
          </button>
          <button
            onClick={() => setSelectedField("instructor")}
            className={`px-4 py-2  m-2 ${
              selectedField === "instructor"
                ? "bg-blue-600 rounded-2xl text-white"
                : "bg-gray-600"
            } `}
          >
            Instructor
          </button>
        </div>
        {selectedField === "student" && (
          <form onSubmit={submitHandler} className="w-full m-1">
            <div className="grid grid-cols-2">
              <div className="flex flex-col">
                <label className="mx-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="border-[1px] p-1 m-2 rounded"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={changeHandler}
                />
              </div>
              <div className="flex flex-col">
                <label className="mx-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="border-[1px] p-1 m- rounded"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="mx-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="border-[1px] p-1 m-2 rounded"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={changeHandler}
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col">
                <label className="mx-2" htmlFor="createP">
                  Create Password
                </label>
                <input
                  className="w-full border-[1px] p-1 m-2 rounded"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={changeHandler}
                />
              </div>
              <div className="flex flex-col">
                <label className="mx-2" htmlFor="confirmP">
                  Confirm Password
                </label>
                <input
                  className="border-[1px] p-1 m-2 rounded"
                  type="password"
                  name="confirmP"
                  id="confirmP"
                  placeholder="Confirm Password"
                  value={formData.confirmP}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <button className="flex items-center justify-center bg-amber-400 font-bold w-full px-2 py-1 rounded-2xl my-1">
              Create Account
            </button>
          </form>
        )}
        {selectedField === "instructor" && (
          <form onSubmit={submitHandler} className="w-full m-1">
            <div className="grid grid-cols-2">
              <div className="flex flex-col">
                <label className="mx-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="border-[1px] p-1 m-2 rounded"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={changeHandler}
                />
              </div>
              <div className="flex flex-col">
                <label className="mx-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="border-[1px] p-1 m-2 rounded"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="mx-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="border-[1px] p-1 m-2 rounded"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                value={formData.email}
                  onChange={changeHandler}
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col">
                <label className="mx-2" htmlFor="createP">
                  Create Password
                </label>
                <input
                  className="border-[1px] p-1 m-2 rounded"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={changeHandler}
                />
              </div>
              <div className="flex flex-col">
                <label className="mx-2" htmlFor="confirmP">
                  Confirm Password
                </label>
                <input
                  className="border-[1px] p-1 m-2 rounded"
                  type="password"
                  name="confirmP"
                  id="confirmP"
                  placeholder="Confirm Password"
                  value={formData.confirmP}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <button className="flex items-center justify-center font-bold bg-amber-400 text-black w-full px-2 py-1 rounded-2xl my-1">
              Create Account
            </button>
          </form>
        )}
      </div>
      <div className="w-1/2 m-2 p-2 flex items-center justify-center">
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
