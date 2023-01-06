import {Routes, Route} from "react-router-dom"
import Home from "../Components/Home/home"
import Product from "../Components/ProductPages/Product"
import Navbar from "../Components/Navbar/Navbar"
import Blog from "../Components/Blog/Blog"
import GoToTop from "../Components/Home/GoToTop/GoToTop"

function AllRoutes() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
                <Route path="/blog" element={<Blog />} />
            </Routes> 
            <GoToTop /> 
        </div>
    )
}

export default AllRoutes;
