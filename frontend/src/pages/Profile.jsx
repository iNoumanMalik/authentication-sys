import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
function Profile() {
  return (
    <div className="bg-gray-200 flex">
      <Navbar />
      <div className="bg-[white] flex justify-evenly items-center w-full m-20 rounded-3xl shadow-2xl">
        <Outlet/>
      </div>
    </div>
  );
}

export default Profile;
