import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Profile() {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();

  if(!user) return navigate('/login');
  return (
    <div className="bg-gray-200 flex">
      <Navbar />
      <div className="bg-[white] flex justify-evenly items-center w-full m-20 rounded-3xl shadow-2xl">
        <Outlet context={user}/>
      </div>
    </div>
  );
}

export default Profile;
