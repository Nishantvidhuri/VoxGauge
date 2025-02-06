import { useState, useContext } from "react";
import { AuthContext } from "../App";
import { users } from "../data/users"; // Import users list

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ id: "", password: "" });
  const [error, setError] = useState(""); // For showing error messages

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

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Login</h2>

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
