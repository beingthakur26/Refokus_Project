import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-600'>
        <div className="nav-left flex items-center">
            <img 
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" 
            alt="" />
            <div  className='links flex gap-14 ml-20 '>
                {["Home", "Work", "Culture", "", "News"]
                .map((elem, index) => ( 
                    elem.length === 0 ? <span key={index} className='w-[3px] h-7 bg-zinc-600'></span> : 
                    <a href='#' 
                    className='text-md flex gap-1 items-center font-["montserrat_thin"]' key={index} >
                    {index === 1 && (
                        <span key={index} style={{boxShadow: "0 0 0.25em #00FF19"}} className='h-1.5 w-1.5 rounded-full bg-green-600 inline-block' ></span>)}
                    {elem} </a>))
                }
            </div>
        </div>
        <div className="nav-right">
            <Button/>
        </div>
    </div>
  )
}

export default Navbar