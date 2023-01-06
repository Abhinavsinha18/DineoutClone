import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/home";
import Product from "../Components/ProductPages/Product";
import Navbar from "../Components/Navbar/Navbar";
import Checkout from "../Components/Checkout/Checkout";
import ProductDetails from "../Components/ProductDetail/ProductDetails";
import Login from "../Components/LoginSignup/Login"
import GoToTop from "../Components/Home/GoToTop/GoToTop";
import Blog from "../Components/Blog/Blog";

function AllRoutes() {
  return (
    <div>
      
      <Navbar />
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:e" element={<ProductDetails />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <GoToTop />
    </div>
  );
}

export default AllRoutes;
