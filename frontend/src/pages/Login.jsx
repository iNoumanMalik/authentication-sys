import React, { useEffect, useState } from "react";
import side_photo from "../assets/bg2.jpg";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import icon_google from "../assets/icon-google.svg";

function Login() {
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="bg-[#e3a8ae] min-h-screen flex justify-center items-center">
      <div
        className={`flex flex-row justify-center items-center max-w-full mx-12 rounded-4xl shadow-2xl transform transition-all duration-500 ease-out p-4 bg-white min-w-[60%] ${
          show ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
        }`}
      >
        <div className="min-w-[50%] flex flex-col justify-center items-center">
          <div className="flex flex-col space-y-8  w-[80%]">
            <h2 className="text-3xl text-center">Welcome back!</h2>
            <button className="bg-gray-200 shadow-lg active:translate-y-1 active:shadow-md transition flex justify-center gap-2">
              <img src={icon_google} width={24} />
              Sign in With Google
            </button>
            <form className="flex flex-col">
              <label className="flex flex-col text-start mb-4">
                Email
                <input
                  name="email"
                  placeholder="name@email.com"
                  type="email"
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg mt-2"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col text-start mb-4">
                Password
                <div className="relative">
                  <input
                    name="password"
                    placeholder="********"
                    type={showPassword?'text':'password'}
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg mt-2 w-full"
                    value={form.password}
                    onChange={handleChange}
                  />
                  {form.password && (
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-5 cursor-pointer"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  )}
                </div>
              </label>
              <button type="Submit" className="bg-black text-white my-2">
                Login to your account
              </button>
              <a
                onClick={handleRegisterClick}
                className="text-sm text-center mt-2 cursor-pointer text-black hover:text-[#de717e] transition-colors duration-500 "
              >
                Not a member? Signup
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

export default Login;
