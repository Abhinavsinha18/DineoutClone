import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/home";
import Product from "../Components/ProductPages/Product";
import Navbar from "../Components/Navbar/Navbar";
import Checkout from "../Components/Checkout/Checkout";
import ProductDetails from "../Components/ProductDetail/ProductDetails";

function AllRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:e" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
