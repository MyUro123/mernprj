import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in as admin
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user",
          {
            withCredentials: true,
          }
        );

        if (response.data?.role === "admin") {
          setUser(response.data);
          setLoading(false);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/logout",
        {},
        {
          withCredentials: true,
        }
      );
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      navigate("/login");
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-info">
          <span>Welcome, {user?.name || "Admin"}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>

      <div className="admin-container">
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2>📦 Manage Categories</h2>
            <p>Add, edit, or delete product categories</p>
            <button onClick={() => navigate("/category")}>Go to Categories</button>
          </div>

          <div className="dashboard-card">
            <h2>📂 Manage Subcategories</h2>
            <p>Organize product subcategories</p>
            <button onClick={() => navigate("/subcategory")}>Go to Subcategories</button>
          </div>

          <div className="dashboard-card">
            <h2>📝 Manage Items</h2>
            <p>Add, edit, or delete products</p>
            <button onClick={() => navigate("/item")}>Go to Items</button>
          </div>

        
        
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
