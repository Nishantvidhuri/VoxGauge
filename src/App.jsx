import { useState, useEffect, createContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Conversations from "./components/Conversations";

export const AuthContext = createContext();

export default function App() {
  const [user, setUser] = useState(() => {
    // Retrieve user from localStorage on page load
    const savedUser = localStorage.getItem("loggedInUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store in localStorage
    } else {
      localStorage.removeItem("loggedInUser"); // Remove from localStorage on logout
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="flex">
        {user && <Sidebar />}
        <div className="flex-1">
          {user && <Navbar />}
          <Routes>
            {/* Redirect "/" to Login */}
            <Route path="/" element={<Navigate to={user ? "/conversations" : "/login"} />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/conversations" />} />
            <Route path="/conversations" element={user ? <Conversations /> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </AuthContext.Provider>
  );
}
