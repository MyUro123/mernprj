import axios from "axios";
import { useEffect, useState } from "react";

function UserRegister() {
  const [name, setName] = useState("");
  const [emailid, setEmailId] = useState("");
  const [contactno, setContactNo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
   
 
  const save = async () => {
    if (!name.trim()) {
      alert("Please enter a name");
      return;
    }

    if (!emailid.trim()) {
      alert("Please enter an email");
      return;
    }

    if (!contactno.trim()) {
      alert("Please enter a contact number");
      return;
    }

    if (!username.trim()) {
      alert("Please enter a username");
      return;
    }

    if (!password.trim()) {
      alert("Please enter a password");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/user", {
        name: name.trim(),
        emailid: emailid.trim(),
        contactno: contactno.trim(),
        username: username.trim(),
        password: password.trim()
      });
      alert(response.data?.message || "User registered successfully");
      setName("");
      setEmailId("");
      setContactNo("");
      setUsername("");
      setPassword("");
    } catch (error) {
      const message = error.response?.data?.message || "Failed to register user";
      alert(message);
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register User</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        placeholder="Email"
        value={emailid}
        onChange={(e) => setEmailId(e.target.value)}
      />
      <br />
      <input
        placeholder="Contact Number"
        value={contactno}
        onChange={(e) => setContactNo(e.target.value)}
      />
      <br />
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
      <button onClick={save}>Register</button>
    </div>
  );
}

export default UserRegister;        
       