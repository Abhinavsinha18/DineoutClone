import FeaturedRestaurants from "./FeaturedRestaurants/featuredRestaurant";
import Feature from "./Features/features";
import NearRestaurants from "./nearRestaurants/nearRestaurants";
import Offers from "./Offers/offers";
import SearchBar from "./searchbar/searcbar";
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer";
import ImgSlider from "./ImgSlider/ImgSlider";
import gif from "./gif.gif"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'

import Chatbot from "../Chatbot/Chatbot";
// import { useState } from "react";


function Home() {
  // let [flag,setFlag] =useState(false);

const { isOpen, onOpen, onClose } = useDisclosure();

// let ShowLogo = ()=>{
//    imgGif.current.innerText = "Book Now 🧭";
//    imgGif.current.style.backgroundColor = "purple";
   
   
// }
// let RemoveLogo = ()=>{
//     imgGif.current.style.backgroundColor = "orangered";
//     imgGif.current.innerText = "HOLA 👋"
//  }


    return (
        
        <div>
           {/* <div style={{position: "fixed",bottom: "5%",zIndex: "1",left: "2%",width:"10%",textAlign:"center"}} onMouseLeave={RemoveLogo} onMouseEnter={ShowLogo}>
          <Link to={"/bookatable"} style={{textDecoration:"none"}}><p ref={imgGif} style={{color:"white",borderRadius:"20px",padding:"5px",top:"20px",position:"relative",backgroundColor:"orangered",width:"80%"}}>HOLA 👋</p></Link>
          <img src="https://thumbs.gfycat.com/AcidicUnfoldedGoldenretriever-max-1mb.gif" alt="" width={"100%"}/>
      </div>   */}
           {/* <h1>{flag? "Ask Querry" : "Hola"}</h1> */}
           <img style={{width:"120px",cursor:"pointer",height:"120px",position:"fixed", zIndex:"10", bottom:"10%", left:"2%"}} onClick={onOpen} src={gif} alt="gif" className="gifimg"/>
      <Modal isOpen={isOpen} onClose={onClose} size={''} >
        <ModalOverlay />
        <ModalContent  width={"0px"} height={"10px"} position="fixed" left="8%"  top="10%">
          <ModalBody height={"800px"} zIndex="10" >
            <Chatbot  />
          <ModalCloseButton  bg="red" borderRadius={"5px"} height="50px"  color="white" cursor={"pointer"} position="absolute" top={"10%"} left="345px" zIndex="10" />
          </ModalBody> 
        </ModalContent>
      </Modal>


            <Navbar/>
            <SearchBar />
            <Offers />
            <ImgSlider />
            <NearRestaurants />
            <FeaturedRestaurants />
            <Feature />
            <Footer/>

        </div>
    )
}

export default Home;