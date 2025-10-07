import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalAuthContext } from "../Context/AuthContext";
import { AxiosInstance } from "../routes/axiosInstance";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const isloggedIn = useContext(GlobalAuthContext);
  // console.log(isloggedIn);
  let { loggedInUser, setLoggedInUser } = isloggedIn;

  async function handleLogout() {
    try {
      let response = await AxiosInstance.post("/users/logout");
      console.log(response);
      if (response.data.success) {
        setLoggedInUser(false);
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div>
      {loggedInUser ? (
        <div>
          {" "}
         
          <nav className="h-16 border-b-2 p-4  flex items-center justify-between">
            <div className="text-xl font-bold">Task1</div>
            <div className=" flex gap-6 items-center">
              <button
                onClick={handleLogout}
                className="text-white text-center p-2 rounded bg-blue-500"
              >
                Logout
              </button>
            </div>
          </nav>
        </div>
      ) : (
        <div>
          <nav className="h-16 w-full fixed top-0 bg-white border-b-2 p-4  flex items-center justify-between ">
            <div className="text-xl font-bold">Task1</div>

            <div className=" flex gap-6 items-center">
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="text-white text-center p-2 rounded bg-gray-900"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="text-white text-center p-2 rounded bg-gray-900"
              >
                Register
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
