import { Link } from "react-router-dom";
import { FaCog, FaUserCircle, FaPowerOff } from "react-icons/fa";

export default function Navbar() {
  return (
    <aside className="h-screen w-20 bg-white text-gray ">
      <div className=" flex flex-col items-center space-y-8 p-4 pt-30">
        <Link to="/profile" className="px-3 py-2">
          <FaUserCircle className="w-full" size={20} color="#4182f9" />
        </Link>
        <Link to="/notifications" className="px-3 py-2 rounded">
          <FaCog className="w-full" size={20} color="#4182f9" />
        </Link>
        <a className="px-3 py-2 rounded">
          <FaPowerOff className="w-full" size={20} color="#4182f9" />
        </a>
      </div>
    </aside>
  );
}
