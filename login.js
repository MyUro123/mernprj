import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username.trim()) {
      alert("Please enter a username");
      return;
    }

    if (!password.trim()) {
      alert("Please enter a password");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        {
          username: username.trim(),
          password: password.trim(),
        },
        {
          withCredentials: true,
        }
      );

      alert(response.data?.message || "Login successful");
      
      // Redirect based on user role
      if (response.data?.role === "admin") {
        navigate("/admin-dashboard");
      } else if (response.data?.role === "user") {
        navigate("/");
      } else if (response.data?.redirect) {
        navigate(response.data.redirect);
      }
    } catch (error) {
      const message = error.response?.data?.message || "Failed to login";
      alert(message);
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
 