import React, { useState } from "react";
import {toast} from "react-toastify"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../routes/axiosInstance";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      let response = await AxiosInstance.post("/users/register",
        {
          userName: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );
      if(response.data.success){
        toast.success(response.data.message)
      }
    } catch (error) {
      console.log("Error While Registering");
      console.log(error)
      // toast.error(error.response.data.message);
      
      
    }
    
  };
  return (
    <>
    //bg-gradient-to-tl from-blue-100 to-purple-600
      <div className="h-[100vh] w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-gray-800">
        <div className="bg-white w-[400px] p-4 rounded-2xl shadow-2xl ">
          <h1 className="text-gray-800 text-3xl font-extrabold p-2 text-center mt-3">
            Welcome !!! 👋
          </h1>
          <p className="text-center text-gray-500 text-md p-2">
            Please SignUp to continue
          </p>
          <form className="h-[50vh] m-4">
          <div className="flex flex-col gap-1 mb-3">
            <label
              htmlFor="username"
              className="font-semibold text-sm text-gray-700 "
            >
              UserName{" "}
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Your Username"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-1 mb-5">
            <label
              htmlFor="email"
              className="font-semibold text-sm text-gray-700"
            >
              Email{" "}
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-1 mb-5">
            <label
              htmlFor="password"
              className="font-semibold text-sm text-gray-700"
            >
              Password{" "}
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="text"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              autoComplete="off"
            />
          </div>

          <div>
            <button
              onClick={register}
              className="w-full  bg-gray-700  text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
