import { useState, useContext } from "react";
import { AuthContext } from "../App";
import { users } from "../data/users"; // Import users list
import { FaCopy } from "react-icons/fa";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ id: "", password: "" });
  const [error, setError] = useState(""); // For showing error messages
  const loginCredentials = { id: "nishantvidhuri", password: "nishant123" };

  const handleLogin = () => {
    const { id, password } = credentials;

    if (!id.trim() || !password.trim()) {
      setError("User ID and password are required.");
      return;
    }

    const user = users.find(
      (u) => u.id === id.trim() && u.password === password.trim()
    );

    if (user) {
      setUser(user);
      localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store in localStorage
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
      {/* Credentials Box in the Corner */}
      <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md border border-gray-300 w-60">
        <h3 className="font-semibold text-lg mb-3 text-gray-700">Test Credentials</h3>
        <div className="flex items-center justify-between mb-2 border-b pb-2">
          <p className="text-gray-700"><strong>Username:</strong> {loginCredentials.id}</p>
          <button
            onClick={() => copyToClipboard(loginCredentials.id)}
            className="bg-gray-200 p-1 rounded text-xs hover:bg-gray-300"
          >
            <FaCopy className="text-gray-600" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-700"><strong>Password:</strong> {loginCredentials.password}</p>
          <button
            onClick={() => copyToClipboard(loginCredentials.password)}
            className="bg-gray-200 p-1 rounded text-xs hover:bg-gray-300"
          >
            <FaCopy className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow-md w-96 border border-gray-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Login</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input
          type="text"
          placeholder="User ID"
          className="w-full p-2 border rounded mb-3"
          value={credentials.id}
          onChange={(e) => setCredentials({ ...credentials, id: e.target.value })}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-3"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
