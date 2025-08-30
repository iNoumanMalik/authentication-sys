import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import errorIllustration from "../assets/illustrations/error.png"
import successIllustration from "../assets/illustrations/success.png"

// when we click on verification link (received to our email address), this open an address /verify-email which we provide in backend. So for this route we set route in app.jsx and when that route meets, it will open this page. From backend we are passing token in route, on frontend we fetch it using useParams() and then pass in post request of verify email

/*
  const verifyUrl = `${process.env.CLIENT_URL}/verify-email/${raw}`; // raw is token

  /verify-email created route and page in frontend

  const {token} = useParams();  // fetching that token

  await axios.post(`http://localhost:8000/api/auth/verify?token=${token}`); // sending back to backend for verification

  const { token } = req.query; // fetching in backend

 */

function VerifyEmail() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const { token } = useParams();
  const navigate = useNavigate();

  const verifyEmail = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/auth/verify?token=${token}`
      );
      setMessage(res.data?.message);
      console.log(res.data.message);
    } catch (err) {
      setError(err.response?.data?.error);
      console.log(err.response?.data?.error);
      console.log(error);
    }
  };

  const handleNavigation = () => {
    navigate("/");
  };

  useEffect(() => {
    verifyEmail();
  }, [token]);

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full h-full flex justify-center items-center">
        {error && <img src={errorIllustration} className="w-96"/>}
        {message && <img src={successIllustration} className="w-96"/>}

      </div>
      <div className="flex flex-col justify-center items-center">
        {message && <h2 className="text-white text-2xl">Congratulations! {message}</h2>}
        {error && <h2 className="text-red-500 text-2xl">Opps... {error}</h2>}
        <button onClick={handleNavigation} className="bg-gray-200 w-54 mt-4 cursor-pointer">
          Go to Login
        </button>
      </div>
    </div>
  );
}

export default VerifyEmail;
