import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import CatRegister from "./Admin/cat";
import SubCatRegister from "./Admin/subcat";
import ItemRegister from "./item";
import UserRegister from "./user";
import Login from "./login";
import ChangePassword from "./changepassword";
import ProductList from "./ProductList";
import AdminDashboard from "./AdminDashboard";
 
function App() {
  return (
    <BrowserRouter>

      <NavBar />  

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/category"
          element={<CatRegister />}
        />

        <Route
          path="/subcategory"
          element={<SubCatRegister />}
        />

        <Route
          path="/item"
          element={<ItemRegister />}
        />

        <Route
          path="/user"
          element={<UserRegister />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />
        <Route
          path="/changepassword"
          element={<ChangePassword />}
        />

        <Route
          path="/ProductList"
          element={<ProductList />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;