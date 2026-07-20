import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ background: "#1976d2", padding: "10px" }}>
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Home
      </Link>

       
      <Link to="/user" style={{ color: "white", marginRight: "20px" }}>
        User
      </Link>
      <Link to="/login" style={{ color: "white", marginRight: "20px" }}>
        Login
      </Link>
      <Link to="/changepassword" style={{ color: "white", marginRight: "20px" }}>
        Change Password
      </Link>
      <Link to="/productlist" style={{ color: "white", marginRight: "20px" }}>
        Product List
      </Link>
     
    </nav>
  );
}

export default NavBar;