import axios from "axios";
import { useEffect, useState } from "react";

function ItemRegister() {
  const [itemname, setItemName] = useState("");
  const [itemdescription, setItemDescription] = useState("");
  const [rate, setRate] = useState("");
  const [img, setImg] = useState("");
  const [subcatid, setSubCatId] = useState("");
  const [subcategories, setSubCategories] = useState([]);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/subcat");
        setSubCategories(response.data || []);
      } catch (error) {
        console.error("Failed to load sub categories", error);
      }
    };

    fetchSubCategories();
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files && event.target.files[0];

    if (!file) {
      setImg("");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const save = async () => {
    if (!itemname.trim()) {
      alert("Please enter an item name");
      return;
    }

    if (!itemdescription.trim()) {
      alert("Please enter an item description");
      return;
    }

    if (!rate) {
      alert("Please enter a rate");
      return;
    }

    if (!img) {
      alert("Please select an image");
      return;
    }

    if (!subcatid) {
      alert("Please select a sub category");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/item", {
        itemname: itemname.trim(),
        itemdescription: itemdescription.trim(),
        rate: Number(rate),
        img,
        subcatid,
      });
      alert(response.data?.message || "Item added successfully");
      setItemName("");
      setItemDescription("");
      setRate("");
      setImg("");
      setSubCatId("");
    } catch (error) {
      const message = error.response?.data?.message || "Failed to add item";
      alert(message);
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register Item</h2>
      <input
        placeholder="Item Name"
        value={itemname}
        onChange={(e) => setItemName(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Item Description"
        value={itemdescription}
        onChange={(e) => setItemDescription(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Rate"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <br />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <br />
      <select value={subcatid} onChange={(e) => setSubCatId(e.target.value)}>
        <option value="">Select Sub Category</option>
        {subcategories.map((subcategory) => (
          <option key={subcategory.subcatid} value={subcategory.subcatid}>
            {subcategory.subcatname}
          </option>
        ))}
      </select>
      <br />
      {img && <img src={img} alt="Preview" style={{ width: 120, marginTop: 10 }} />}
      <br />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default ItemRegister;
