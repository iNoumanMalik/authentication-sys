import React from "react";
import sidephoto from "../assets/bg2.jpg";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="bg-[#e3a8ae] min-h-screen flex justify-center items-center">
      <div className="flex flex-row justify-center items-center max-w-full mx-12 rounded-4xl shadow-2xl transition p-4 bg-white min-w-[60%]">
        <div className="min-w-[50%] flex flex-col justify-center items-center">
          <div className="flex flex-col space-y-8  w-[80%]">
            <h2 className="text-3xl text-center">Welcome back!</h2>
            {/* <button className="bg-gray-200 shadow-lg active:translate-y-1 active:shadow-md transition">
              Sign in With Google
            </button> */}
            <form className="flex flex-col">
              
              <label className="flex flex-col text-start mb-4">
                Email
                <input
                  placeholder="name@email.com"
                  type="email"
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg mt-2"
                />
              </label>
              <label className="flex flex-col text-start mb-4">
                Password
                <input
                  placeholder="********"
                  type="password"
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg mt-2"
                />
              </label>
              <button type="Submit" className="bg-black text-white my-2">
                Login to your account
              </button>
              <a onClick={handleRegisterClick} className="text-sm text-center mt-2 cursor-pointer text-black hover:text-[#de717e] transition-colors duration-500 ">
                Not a member? Signup
              </a>
            </form>
          </div>
        </div>
        <div className="h-[600px] w-[600px] min-w-[50%]">
          <img src={sidephoto} className="w-full h-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Login;
