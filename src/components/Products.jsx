import React, { useState } from 'react'
import Product from './Product'
import { motion } from "motion/react"

function Products() {

    const [pos, setPos] = useState(20)
    const mover = (val) => {
        setPos(val*20)
    }

    var products = [
        {title: "arqitel", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false},
        {title: "TTR", description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: false},
        {title: "YIR 2022", description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live: true, case: true},
        {title: "yahoo!", description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: true, case: true}
    ]

  return (
    <div className='mt-30 relative'>
        {products.map((val, index) => <Product val={val} key={index} count={index} mover={mover}/>)}
        <div className='absolute top-0 w-full h-full pointer-events-none'>
            <motion.div 
                initial={{y: pos}}  
                animate={{y: pos + `rem`}}
                transition={{ease: [0.76, 0, 0.24, 1], duration: 0.6}}
                className='window w-[30rem] h-[20rem] absolute left-[44%] -translate-x-[50%]  overflow-hidden '>
                    <motion.div
                        animate={{y: -pos + `rem`}} 
                        transition={{ease: [0.76, 0, 0.24, 1], duration: 0.4}}
                        className='w-full h-full  '>
                            <video autoPlay loop src="https://refokuzzz-cloned.vercel.app/assets/arqitel-BXWnuhhk.webm"></video>
                    </motion.div>
                    <motion.div
                        animate={{y: -pos + `rem`}} 
                        transition={{ease: [0.76, 0, 0.24, 1], duration: 0.4}}
                        className='w-full h-full  '>
                            <video autoPlay loop src="https://refokuzzz-cloned.vercel.app/assets/ttr-C2lTQdRZ.webm"></video>
                    </motion.div>
                    <motion.div
                        animate={{y: -pos + `rem`}} 
                        transition={{ease: [0.76, 0, 0.24, 1], duration: 0.4}}
                        className='w-full h-full  '>
                            <video autoPlay loop src="https://refokuzzz-cloned.vercel.app/assets/yir-IiuY-KSG.webm"></video>
                    </motion.div>
                    <motion.div
                        animate={{y: -pos + `rem`}} 
                        transition={{ease: [0.76, 0, 0.24, 1], duration: 0.4}}
                        className='w-full h-full  '>
                            <video autoPlay loop src="https://refokuzzz-cloned.vercel.app/assets/yahoo--FL9ySUE.webm"></video>
                    </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Products