import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[12.5rem] leading-none tracking-tight font-semibold'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex flex-row gap-15'>
                <div>
                    <h4 className='text-zinc-500 mb-8 text-[1.2vw]'>Socials</h4>
                    {["Instagram", "LinkedIn", "Twitter"]
                    .map((item, index) => <a href='#' className='text-[1.2vw] block mt-2 text-zinc-600' key={index}>{item}</a>)}
                </div>
                <div>
                    <h4 className='text-zinc-500 mb-8 text-[1.2vw]'>Sitemaps</h4>
                    {["Home", "Work", "Career", "Contacts"]
                    .map((item, index) => <a href='#' className='text-[1.2vw] block mt-2 text-zinc-100 font-light' key={index}>{item}</a>)}
                </div>
                <div className='flex flex-col flex-end ml-10 '>
                    <p className='mb-5 text-[1.2vw] font-extralight text-end'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                    <img className='ml-15 bg-blue-600 px-2 py-1'  src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer