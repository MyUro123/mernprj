import axios from "axios";
import { useState } from "react";

function CatRegister() {
  const [catname, setCatName] = useState("");

  const save = async () => {
    if (!catname.trim()) {
      alert("Please enter a category name");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/cat", { catname: catname.trim() });
      alert("Category added successfully");
      setCatName("");
    } catch (error) {
      alert("Failed to add category");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        placeholder="Name"
        value={catname}
        onChange={(e) => setCatName(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default CatRegister;
