import React from 'react'
import  { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import ProductAction from './StoreContent/ProductAction';
import ProductBox from './Products/ProductBox'
import Sidenav from './Sidenav/Sidenav';
import "./product.css"

const Product = () => {
  let [state,setState]= useState([]);



  let dispatch = useDispatch();
  useEffect(()=>{

    fetchhh();
   //  dataUpdate();
   },[])

  const fetchhh = async()=>{
    await fetch(`https://dineoutclone-foc1.onrender.com/products`)
    .then((res)=>res.json())
    .then((d)=>{
      dispatch(ProductAction({d,setState}));
      console.log(d)
    setState(d);
  })
  }


  return (
    <div className='a-container'>
        <Sidenav state={state} setState={setState}/>
        <ProductBox state={state} setState={setState}/>
    </div>
  )
}

export default Product;