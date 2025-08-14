import { Link } from "react-router-dom";
import { FaCog, FaUserCircle, FaPowerOff, FaMapSigns } from "react-icons/fa";

export default function Navbar() {
  return (
    <aside className="h-screen w-24 bg-white text-gray ">
      <div className=" flex flex-col items-center space-y-20 p-4 pt-30">
        <Link to="/profile/dashboard" className="">
          <FaMapSigns className="w-full" size={20} color="#4182f9" />
        </Link>
        <Link to="/profile/info" className="">
          <FaUserCircle className="w-full" size={20} color="#4182f9" />
        </Link>
        <Link to="/profile/settings" className="">
          <FaCog className="w-full" size={20} color="#4182f9" />
        </Link>
        <Link to="/profile/logout" className="">
          <FaPowerOff className="w-full" size={20} color="#4182f9" />
        </Link>
      </div>
    </aside>
  );
}
