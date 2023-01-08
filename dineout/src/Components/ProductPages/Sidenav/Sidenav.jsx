import React, { useEffect, useRef, useState } from 'react';
import "./sidenav.css";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'
import store from "../../../Store"
import { useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi"


const Sidenav = ({state,setState,page,filtercheck}) => {
  
let [dataFch,setFch] = useState([]);
let [ham , setHam] = useState(true);



    let inp1 = useRef(null);
    let inp2 = useRef(null);
    let inp3 = useRef(null);
    let inp4 = useRef(null);
    let inp5 = useRef(null);

  let [checkboxProduct, setCheckboxProduct] = useState([
  {
    "name" : "Pure Veg",
    "checked" : false,
    "ref":inp2
    },
    {
      "name" : "5 Star",
      "checked" : false,
      "ref":inp3
      },
      {
        "name" : "Buffet",
        "checked" : false,
        "ref":inp4
        },
        {
          "name" : "Dineout Pay",
          "checked" : false,
          "ref":inp1
          },
        {
          "name" : "Fast Food",
          "checked" : false,
          "ref":inp5
          },

])

  let data = useSelector((store)=>store.data);
  // console.log(data);

  const checkboxProduct2 = ["North Indian","Fast Food","Chinese","Desserts"];
  const checkboxProduct3 = ["Cafe","Breakfast","Bakery","Asian"];
  const checkboxProduct4 = ["Card Accepted","Wallet Accepted","Home Delivery","Air Conditioned"];






  const FilterProduct =(e)=>{
    // setState(data);
    let toast = useToast();
    let temPdata = data;

    temPdata = temPdata.filter((item)=>{
      if( item.category===e || item.discription3===e || item.discription2===e || item.tags===e || item.discription5===e  || item.discription1===e){
        return item;
      }
    })
    setState(temPdata)


    toast({
      title: `Filter Success`
     
    })
    // console.log(temPdata);
  }
  
  return (
    <>
    
    <div className= {ham ? 'a-sidenav-container mobile-menu' : "mobile-menu"}>

<div>
<Accordion defaultIndex={[2,1,0]} allowMultiple pl={10} >
  <AccordionItem >
    <h2 >
      <AccordionButton className='a-box-span' >
        <Box  flex='1' textAlign='left' className='accord'>
        Quick Filters
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={0} mt={-5}>
        <div className='a-sidebar-detail'>
      <div>
        <input type="text" className='sidenav-inp'   placeholder='Search'/>
      </div>


      {checkboxProduct.map((item,i)=>{
        return <div  key={i+1}>
        <input type="checkbox"  value={item.name} ref={item.ref} onChange={(e)=>filtercheck(e)}/> <span>{item.name}</span>
       </div>
      })}
    
        </div>
    </AccordionPanel>
  </AccordionItem>

  <div className='spanBorder'></div>

  <AccordionItem >
    <h2>
      <AccordionButton className='a-box-span'>
        <Box  flex='1' textAlign='left' className='accord' >
        Cuisines
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={0} mt={-5}>
        <div className='a-sidebar-detail'>
      <div>
        <input type="text" className='sidenav-inp' placeholder='Search for Cuisines'/>
      </div>


{checkboxProduct2.map((item,i)=>{
  return <div  key={i+1} className='places-a'>
  <span onClick={()=>FilterProduct(item)}>{item}</span>
 </div >
})}

   
        </div>
    </AccordionPanel>
  </AccordionItem>
  <div className='spanBorder'></div>


  <AccordionItem >
    <h2>
      <AccordionButton className='a-box-span'>
        <Box  flex='1' textAlign='left' className='accord' >
        Tags
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={0} mt={-5}>
        <div className='a-sidebar-detail'>
      <div>
        <input type="text" className='sidenav-inp' placeholder='Search'/>
      </div>

{checkboxProduct3.map((item,i)=>{
  return <div  key={i+1}>
  <input type="checkbox"  value={item} onChange={(e)=>filtercheck(e)}/> <span>{item}</span>
 </div>
})}
        </div>
    </AccordionPanel>
  </AccordionItem>

  <div className='spanBorder'></div>


  <AccordionItem >
    <h2>
      <AccordionButton className='a-box-span'>
        <Box  flex='1' textAlign='left' className='accord'>
        Features
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={0} mt={-5}>
        <div className='a-sidebar-detail'>
      <div>
        <input type="text" className='sidenav-inp' placeholder='Search'/>
      </div>

      {checkboxProduct4.map((item,i)=>{
        return  <div key={i+1}>
        <input type="checkbox" value={item} onChange={(e)=>filtercheck(e)}/> <span>{item}</span>
       </div>
      })}
        </div>
    </AccordionPanel>
  </AccordionItem>
  <div className='spanBorder'></div>
 
</Accordion>
</div>

<div>
  <p>Top 10 Resturent in Delhi</p>
</div>
    </div>


{/* ___________________Hamburger -mobile menu__________________ */}

<div className='hamburger-menu'>
<Link to="" onClick={()=>{
  if(ham){
    setHam(false)
  }else{
    setHam(true)
  }
}}> <GiHamburgerMenu/></Link>
</div>


          </>
  )
}

export default Sidenav;