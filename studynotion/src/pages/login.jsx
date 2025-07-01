import React, { useState } from "react";
import lock from "../assets/Pass.png";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login,setLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(
      "-------------------------------- All Your Data ------------------"
    );
    console.log(formData);
    toast("Login Successfully");

    // Clear all fields

    setFormData({
      email: "",
      password: "",
    });
  };

  const clickHandler = (event) => {
    const { name, type, value } = event.target;
    setFormData((preFormData) => {
      return {
        ...preFormData,
        [name]: value,
      };
    });
  };

  return (
    <div className="flex items-center justify-between m-5">
      <div className="w-1/2">
        <div className="ml-2">
          <h1 className="font-bold text-4xl">Welcome Back</h1>
          <p className="text-xl">
            Build skills for today, tommarow, and beyond.
          </p>
          <p className="font-semibold text-blue-500 italic">
            Education to future-proof your career
          </p>
        </div>
        <form onSubmit={submitHandler}>
          <div className="p-2">
            <label htmlFor="email">Email Address</label>
            <input
              className="w-full border-2 rounded"
              onChange={clickHandler}
              type="text"
              name="email"
              id="email"
              value={formData.email}
            />
          </div>
          <div className="p-2 relative">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>

            {/* Input wrapper to position icon inside */}
            <div className="relative">
              <input
                className="w-full border-2 rounded pr-10 pl-2 py-1"
                onChange={clickHandler}
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
              />
              {/* Eye Icon */}
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-600"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            {/* Forgot password link aligned right */}
            <div className="flex justify-end mt-1">
              <Link to="#">
                <p className="text-blue-500 text-sm hover:underline">
                  Forgot Password?
                </p>
              </Link>
            </div>
          </div>

          <button onClick={() => setLogin((prev) => !prev)} className="w-full text-black flex items-center justify-center rounded font-bold  bg-amber-400 p-2">
            Sign in
          </button>
          <div className="flex items-center justify-between">
            <div className="w-full border flex items-center justify-center"></div>
            <div className="p-2">or</div>
            <div className="w-full border flex items-center justify-center"></div>
          </div>
          <div className="border-[1px] p-2 flex items-center justify-center font-semibold rounded">
            Sign in with Google
          </div>
        </form>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img src={lock} alt="" />
      </div>
    </div>
  );
};

export default login;
