import {Routes, Route} from "react-router-dom"
import Home from "../Components/Home/home"
import Product from "../Components/ProductPages/Product"
import Navbar from "../Components/Navbar/Navbar"

function AllRoutes() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
            </Routes>  
        </div>
    )
}

export default AllRoutes;
