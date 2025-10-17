import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "motion/react"

function Card({width, show, title, heading, hover="false"}) {
  return (
    <motion.div
       whileHover={{backgroundColor: hover === "true" && "#8b5cf6", padding: "25px"}}  
       className={`bg-zinc-800 p-5 rounded-xl ${width}`} >
        <div className='w-full'>
            {
                show === true &&
                <>
                <div className='flex justify-between items-center'>
                    <h3>Up Next: News</h3>
                    <IoIosArrowRoundForward />
                </div>
                    <h1 className='text-3xl font-medium mt-5'>Insights and behind the scenes</h1>
                </>
            }
            {
                show === false &&
                <>
                <div className='flex justify-between items-center'>
                    <h3>{title}</h3>
                    <IoIosArrowRoundForward />
                </div>
                    <h1 className='text-3xl font-medium mt-5'>{heading}</h1>
                </>
            }
        </div>
        <div className='down w-full'>
            {
                show === true &&
                <>
                    <p className='mt-80 text-sm text-zinc-500 font-medium'>Explore what drives our team.</p>
                </>
            }

            {
                show === false &&
                    <>
                        <h1 className='text-6xl mt-62 mb-5 font-semibold tracking-tight leading-none '>Start a Project</h1>
                        <button className='max-w-40 px-4 py-2 rounded-full border-1'>Contact Us</button>
                    </>
            }
            
        </div>
    </motion.div>
  )
}

export default Card