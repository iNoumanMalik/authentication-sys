import { Link } from "react-router-dom";
import { FaCog, FaUserCircle, FaPowerOff, FaMapSigns } from "react-icons/fa";

export default function Navbar() {
  return (
    <aside className="h-screen w-24 bg-white text-gray flex justify-center items-center">
      <div className="flex flex-col items-center space-y-20 p-4">
      
        <div className="relative group">
          <Link to="/profile/dashboard">
            <FaMapSigns size={20} color="#4182f9" />
          </Link>
          <span className="absolute left-10 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Dashboard
          </span>
        </div>

        <div className="relative group">
          <Link to="/profile/info">
            <FaUserCircle size={20} color="#4182f9" />
          </Link>
          <span className="absolute left-10 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Profile
          </span>
        </div>

        <div className="relative group">
          <Link to="/profile/settings">
            <FaCog size={20} color="#4182f9" />
          </Link>
          <span className="absolute left-10 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Settings
          </span>
        </div>

        <div className="relative group">
          <Link to="/profile/logout">
            <FaPowerOff size={20} color="#4182f9" />
          </Link>
          <span className="absolute left-10 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Logout
          </span>
        </div>
      </div>
    </aside>
  );
}
