import React from 'react';
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


const Sidenav = ({state,setState}) => {

  let data = useSelector((store)=>store.data);
  // console.log(data);


  const checkboxProduct = ["Dineout Pay","Pure Veg","5 Star","Buffet","Fast Food"];
  const checkboxProduct2 = ["North Indian","Fast Food","Chinese","Desserts"];
  const checkboxProduct3 = ["Casual Dining","Case","Breakfast","Bakery"];
  const checkboxProduct4 = ["Card Accepted","Wallet Accepted","Home Delivery","Air Conditioned"];



const filtercheck =(val)=>{

}


  const FilterProduct =(e)=>{
    // setState(data);
    let temPdata = data;

    temPdata = temPdata.filter((item)=>{
      if( item.category===e || item.discription3===e || item.discription2===e || item.tags===e || item.discription5===e  || item.discription1===e){
        return item;
      }
    })
    setState(temPdata)
    console.log(temPdata);
  }
  
  return (
    
    <div className='a-sidenav-container'>

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
        <input type="text" className='sidenav-inp' placeholder='Search'/>
      </div>


      {checkboxProduct.map((item,i)=>{
        return <div  key={i+1}>
        <input type="checkbox"  value={item}  onChange={(e)=>filtercheck(e)}/> <span>{item}</span>
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
  return <div key={i+1}>
  <input type="checkbox" value={item} onChange={(e)=>filtercheck(e)} /> <span>{item}</span>
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
  )
}

export default Sidenav;