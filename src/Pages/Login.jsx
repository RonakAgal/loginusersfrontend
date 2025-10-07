import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../routes/axiosInstance";
import { GlobalAuthContext } from "../Context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();



  function handleChange(e) {
    // console.log(e);
    let { name, value } = e.target;
    // console.log({ [name]: value });
    setFormData({ ...formData, [name]: value });
  }
 
  const {setLoggedInUser} = useContext(GlobalAuthContext)
  
  const login = async (e) => {
    e.preventDefault();
    
    try {
      let response = await AxiosInstance.post("/users/login", {
        email: formData.email,
        password: formData.password,
      });

      
      console.log(response);
      
      if (response.data.success) {
        setLoggedInUser(true)
        toast.success(response.data.message)
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="font-bold text-4xl text-center text-blue-700 mb-4">
          Login
        </h1>
        <form>
          <div className="flex flex-col gap-1 mb-5">
            <label
              htmlFor="email"
              className="font-semibold text-sm text-gray-700"
            >
              Email
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
          <div className="flex flex-col gap-1 mb-7">
            <label
              htmlFor="password"
              className="font-semibold text-sm text-gray-700"
            >
              Password
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
              onClick={login}
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
