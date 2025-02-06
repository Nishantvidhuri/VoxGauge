import { useContext } from "react";
import { AuthContext } from "../App";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <nav className="flex justify-between items-center bg-white p-4 shadow-md">
      <h1 className="text-lg font-semibold"></h1>
      {user && (
        <div className="flex items-center gap-4">
          <img src={user.photo} alt="User" className="w-  h-10 rounded-full" />
          <div>
            <p className="text-sm font-semibold">{user.username}</p>
            <p className="text-xs text-gray-500">{user.designation}</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
