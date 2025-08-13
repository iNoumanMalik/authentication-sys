import React from "react";
import side_photo from "../assets/bg1.jpg";
import icon_google from "../assets/icon-google.svg"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [show,setShow] = useState(false);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  
  useEffect(()=>{
    setShow(true)
  },[])

  return (
    <div className="bg-[#8be2e9] min-h-screen flex justify-center items-center">
      <div className={`flex flex-row justify-center items-center max-w-full mx-12 rounded-4xl shadow-2xl transform transition-all duration-500 ease-out p-4 bg-white min-w-[60%] ${show? 'translate-x-0 opacity-100':'translate-x-5 opacity-0'}`}>
        <div className="min-w-[50%] flex flex-col justify-center items-center">
          <div className="flex flex-col space-y-8  w-[80%]">
            <h2 className="text-3xl text-center">Create your account</h2>
            <button className="bg-gray-200 shadow-lg active:translate-y-1 active:shadow-md transition flex justify-center gap-2">
              <img src={icon_google} width={24}/>
              Sign in With Google
            </button>
            <form className="flex flex-col">
              <label className="flex flex-col text-start mb-4">
                Name
                <input
                  placeholder="Your Name"
                  type="text"
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg mt-2"
                />
              </label>
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
                Create Account
              </button>
              <a
                onClick={handleLoginClick}
                className="text-sm text-center mt-2 cursor-pointer text-black hover:text-[#47cdcf] transition-colors duration-500 "
              >
                Already have an account?
              </a>
            </form>
          </div>
        </div>
        <div className="h-[600px] w-[600px] min-w-[50%]">
          <img src={side_photo} className="w-full h-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Register;
