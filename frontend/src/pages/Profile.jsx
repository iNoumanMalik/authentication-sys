import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useContext,useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Profile() {
  const {user} = useContext(AuthContext)
  console.log(user);
  const navigate = useNavigate();

  useEffect(()=>{
  if(!user) navigate('/login');
  },[user,navigate])

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
