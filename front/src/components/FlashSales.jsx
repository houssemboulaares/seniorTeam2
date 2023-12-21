import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Img1 from '../images/g92-2-500x500-1-550x400h.jpg-PhotoRoom.png-PhotoRoom.png' 
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const FlashSales = () => {
  const[showAddToCart,setShowAddToCart]=useState(false)
  return (
    <div className='ml-10'>
    <div className='mb-10'>
    <div className=' w-5 h-10 bg-red rounded'></div>
    <h1 className='text-red absolute left-16 -mt-8 font-bold'>Today's</h1>
    </div>
    <div className='grid grid-cols-2'>
    <h1 className='text-5xl font-medium '>Flash Sales</h1>
    <div className=' w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-14'><FaArrowLeft /></div>
    <div className='w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-0'><FaArrowRight /></div>
    </div>
    <div className='w-80 h-72 bg-gray flex justify-center items-center mt-11'
     onMouseEnter={()=>setShowAddToCart(!showAddToCart)}
    onMouseLeave={()=>setShowAddToCart(!showAddToCart)}>
      {showAddToCart&&<div style={{'top': '138%'}} className='w-80 h-11 bg-black text-white flex justify-center items-center absolute'>Add To Cart</div>}
      <div style={{'top':'106%','left':'55px'}} className='absolute top-full left-0 w-20 rounded h-8 bg-red flex justify-center items-center text-white'>-40%</div>
       
       
       
        <div id='flash-sales-grid' className='grid grid-rows-2 gap-4 '>
       <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center'><FaRegHeart size={20}/></div> 
       <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center'><MdOutlineRemoveRedEye size={20}/></div> 
       </div>
       <img className=' w-40 ' src={Img1} alt="" />
        
        </div>
        <h1>HAVIT HV-G92 Gamepad</h1>
        <div className='flex gap-4'>
        <h1 className='text-red'>$120</h1><h1 className='text-gray-300 line-through	'>$160</h1>
        </div>
        
        <div style={{'margin-left':'40%','margin-bottom':'10%'}} className='flex justify-center items-center w-80 h-16 bg-red mt-16 '>
          <h1 className='text-white cursor-pointer'>View All Products</h1>
        </div>
      <hr className='w-5/6 ml-20 text-gray-300 mb-32'/>
        
   
    </div>
   
  )
}

export default FlashSales