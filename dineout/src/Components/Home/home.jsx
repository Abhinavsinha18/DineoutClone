import FeaturedRestaurants from "./FeaturedRestaurants/featuredRestaurant";
import Feature from "./Features/features";
import NearRestaurants from "./nearRestaurants/nearRestaurants";
import Offers from "./Offers/offers";
import SearchBar from "./searchbar/searcbar";
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ImgSlider from "./ImgSlider/ImgSlider";

function Home() {
let imgGif = useRef(null);

let ShowLogo = ()=>{
   imgGif.current.innerText = "Book Now 🧭";
   imgGif.current.style.backgroundColor = "purple";
   
   
}
let RemoveLogo = ()=>{
    imgGif.current.style.backgroundColor = "orangered";
    imgGif.current.innerText = "HOLA 👋"
 }


    return (
        
        <div>
           <div style={{position: "fixed",bottom: "5%",zIndex: "1",left: "2%",width:"10%",textAlign:"center"}} onMouseLeave={RemoveLogo} onMouseEnter={ShowLogo}>
          <Link to={"/bookatable"} style={{textDecoration:"none"}}><p ref={imgGif} style={{color:"white",borderRadius:"20px",padding:"5px",top:"20px",position:"relative",backgroundColor:"orangered",width:"80%"}}>HOLA 👋</p></Link>
          <img src="https://thumbs.gfycat.com/AcidicUnfoldedGoldenretriever-max-1mb.gif" alt="" width={"100%"}/>
      </div>  
           
            {/* <Navbar/> */}
            <SearchBar />
            <Offers />
            <ImgSlider />
            <NearRestaurants />
            <FeaturedRestaurants />
            <Feature />
            {/* <Footer/> */}

        </div>
    )
}

export default Home;