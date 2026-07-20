import axios from "axios";
import { useEffect, useState } from "react";

function SubCatRegister() {
  const [subcatname, setSubCatName] = useState("");
  const [catid, setCatId] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cat");
        setCategories(response.data || []);
      } catch (error) {
        console.error("Failed to load categories", error);
      }
    };

    fetchCategories();
  }, []);

  const save = async () => {
    if (!subcatname.trim()) {
      alert("Please enter a subcategory name");
      return;
    }

    if (!catid) {
      alert("Please select a category");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/subcat", {
        subcatname: subcatname.trim(),
        catid,
      });
      alert("Subcategory added successfully");
      setSubCatName("");
      setCatId("");
    } catch (error) {
      alert("Failed to add subcategory");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register Sub Category</h2>
      <input
        placeholder="Sub Name"
        value={subcatname}
        onChange={(e) => setSubCatName(e.target.value)}
      />
      <select value={catid} onChange={(e) => setCatId(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.catid} value={category.catid}>
            {category.catname}
          </option>
        ))}
      </select>
      <button onClick={save}>Save</button>
    </div>
  );
}

export default SubCatRegister;
