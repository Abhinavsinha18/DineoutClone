import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/home";
import Product from "../Components/ProductPages/Product";
import Navbar from "../Components/Navbar/Navbar";
import Checkout from "../Components/Checkout/Checkout";
import ProductDetails from "../Components/ProductDetail/ProductDetails";
import Login from "../Components/LoginSignup/Login";
import GoToTop from "../Components/Home/GoToTop/GoToTop";
import Blog from "../Components/Blog/Blog";
import { useState } from "react";
import Signup from "../Components/LoginSignup/signup";

function AllRoutes() {
  const [checkProps, setCheckProps] = useState({
    name: "",
    date: "",
    month: "",
    time: "",
    guests: 0,
    mobile: null,
    hotelName: "",
    hotelAdd: "",
  });
  return (
    <div>
      <Navbar />
      {/* <Login/> */}
      {/* <Signup/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route
          path="/checkout"
          element={<Checkout checkProps={checkProps} />}
        />
        <Route
          path="/products/:e"
          element={<ProductDetails setCheckProps={setCheckProps} />}
        />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <GoToTop />
    </div>
  );
}

export default AllRoutes;
