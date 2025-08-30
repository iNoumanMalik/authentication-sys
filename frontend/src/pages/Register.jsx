import React from "react";
import side_photo from "../assets/bg1.jpg";
// import icon_google from "../assets/icon-google.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

function Register() {
  const [show, setShow] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePasswordMatch = () => {
    if (confirmPass == "") return setError("");
    if (form.password !== confirmPass) {
      setError("Password does not match");
    } else {
      setError("");
    }
  };
  
  const onSubmit = async() =>{
    try {
      const res = await axios.post('http://localhost:8000/api/auth/register',form)
      setMessage(res.data?.message);
      console.log(res.data?.message)
    } catch (err) {
      setError(err.response?.data?.error || 'Registration Failed')
    }
    
  }

  useEffect(() => {
    handlePasswordMatch();
  }, [confirmPass]);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="bg-[#8be2e9] min-h-screen flex justify-center items-center">
      <div
        className={`flex flex-row justify-center items-center max-w-full mx-12 rounded-4xl shadow-2xl transform transition-all duration-500 ease-out p-4 bg-white min-w-[60%] ${
          show ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
        }`}
      >
        <div className="min-w-[50%] flex flex-col justify-center items-center">
          <div className="flex flex-col space-y-8  w-[80%]">
            <h2 className="text-3xl text-center">Create your account</h2>
            {/* <button className="bg-gray-200 shadow-lg active:translate-y-1 active:shadow-md transition flex justify-center gap-2">
              <img src={icon_google} width={24}/>
              Sign in With Google
            </button> */}
            <form className="flex flex-col" onSubmit={onSubmit}>
              <label className="flex flex-col text-start mb-4">
                Name
                <input
                  name="name"
                  placeholder="Your Name"
                  type="text"
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg mt-2"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="flex flex-col text-start mb-4">
                Email
                <input
                  name="email"
                  placeholder="name@email.com"
                  type="email"
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg mt-2"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="flex flex-col text-start mb-4 relative">
                Password
                <div className="relative">
                  <input
                    name="password"
                    placeholder="********"
                    type={showPassword ? "text" : "password"}
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg mt-2 w-full"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                  {form.password && (
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-5 cursor-pointer"
                      required
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  )}
                </div>
              </label>

              <label className="flex flex-col text-start mb-4">
                Confirm Password
                <div className="relative">
                  <input
                    placeholder="********"
                    type={showConfirmPass ? "text" : "password"}
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg mt-2 w-full"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                  />
                  {confirmPass && (
                    <span
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      className="absolute right-4 top-5 cursor-pointer"
                    >
                      {showConfirmPass ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  )}
                </div>
              </label>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {message && <p>{message}</p>}
              <button
                type="Submit"
                className={`bg-black text-white my-2 ${
                  error ? "opacity-50  cursor-not-allowed" : "cursor-pointer"
                }`}
                disabled={Boolean(error)}
              >
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
