import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineChat, MdOutlineBarChart, MdOutlineDescription, MdOutlineEventNote, MdOutlineAnalytics, MdOutlineSettings, MdOutlineHelpOutline, MdLogout } from "react-icons/md";
import logo from "../assets/logo.png";
import { AuthContext } from "../App";

const Sidebar = () => {
  const { setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser"); // Remove from localStorage
  };

  return (
    <div className="w-64 h-screen bg-white p-4 shadow-md flex flex-col justify-between">
      <div >
        <img src={logo} alt="Logo" className="h-12 w-16 mb-4" />
        <nav className="space-y-4">
          <NavLink to="/conversations" className={({ isActive }) => 
            `flex items-center gap-2 p-3 rounded-lg ${isActive ? 'bg-[#5b58e6] !text-white' : 'text-black-700'}`
          }>
            <MdOutlineChat className="text-inherit" /> Conversations
          </NavLink>

          <NavLink to="/analytics" className={({ isActive }) => 
            `flex items-center gap-2 p-3 rounded-lg ${isActive ? 'bg-[#5b58e6] !text-white' : 'text-gray-700'}`
          }>
            <MdOutlineBarChart className="text-inherit" /> Analytics
          </NavLink>

          <NavLink to="/audit" className={({ isActive }) => 
            `flex items-center gap-2 p-3 rounded-lg ${isActive ? 'bg-[#5b58e6] !text-white' : 'text-gray-700'}`
          }>
            <MdOutlineDescription className="text-inherit" /> Audit
          </NavLink>

          <NavLink to="/key-moments" className={({ isActive }) => 
            `flex items-center gap-2 p-3 rounded-lg ${isActive ? 'bg-[#5b58e6] !text-white' : 'text-gray-700'}`
          }>
            <MdOutlineEventNote className="text-inherit" /> Key Moments
          </NavLink>

          <NavLink to="/statistics" className={({ isActive }) => 
            `flex items-center gap-2 p-3 rounded-lg ${isActive ? 'bg-[#5b58e6] !text-white' : 'text-gray-700'}`
          }>
            <MdOutlineAnalytics className="text-inherit" /> Statistics
          </NavLink>

          <NavLink to="/settings" className={({ isActive }) => 
            `flex items-center gap-2 p-3 rounded-lg ${isActive ? 'bg-[#5b58e6] !text-white' : 'text-gray-700'}`
          }>
            <MdOutlineSettings className="text-inherit" /> Settings
          </NavLink>

          <NavLink to="/help" className={({ isActive }) => 
            `flex items-center gap-2 p-3 rounded-lg ${isActive ? 'bg-[#5b58e6] !text-white' : 'text-gray-700'}`
          }>
            <MdOutlineHelpOutline className="text-inherit" /> Help
          </NavLink>
        </nav>
      </div>

      {/* Logout Button at Bottom */}
      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-2 w-full p-3 rounded-lg text-red-600  mt-auto"
      >
        <MdLogout /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
