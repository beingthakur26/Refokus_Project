import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title= "Get Starteed"}) {
  return (
    <div className='max-w-40 px-4 py-2 rounded-full bg-zinc-100 text-black flex items-center justify-between gap-1'>
        <span className='text-sm font-medium flex items-center justify-around'> {title}</span>
        <IoIosReturnRight/>
    </div>
  )
}

export default Button