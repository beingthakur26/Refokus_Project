import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react"

function Work() {

    const [images, setImages] = useState(
            [
                {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "50%", left: "50%", isActive: true},
                {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "57%", left: "44%", isActive: false},
                {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "45%", left: "57%", isActive: false},
                {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "61%", left: "54%", isActive: false},
                {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "42%", left: "40%", isActive: false},
                {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "66%", left: "56%", isActive: false},
            ]
    )

    const { scrollYProgress } = useScroll()

    scrollYProgress.on("change", (data) => {

        function imagesShow(arr) {
            setImages(prev => (
                prev.map((item, index) => (
                    arr.indexOf(index) === -1 ? ({...item, isActive: false}) : ({...item, isActive: true})
                ))
            ))
        }

        switch(Math.floor(data * 100)) {
            case 0:
                imagesShow([]);
                break;
            case 1:
                imagesShow([0]);
                break;
            case 3:
                imagesShow([0, 1]);
                break;
            case 5:
                imagesShow([0, 1, 2]);
                break;
            case 7:
                imagesShow([0, 1, 2, 3, 4]);
                break;
            case 9:
                imagesShow([0, 1, 2, 3, 4, 5]);
                break;
            case 10:
                imagesShow([0, 1, 2, 3, 4, 5, 6]);
                break;
        }
    });

    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     show_HideImages(Math.floor(latest * 100));
    // })

    // function show_HideImages(scrollval) {
        
    // }

  return (
    <div className='w-full'>
        <div className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[31vw] font-["montserrat_thin"] leading-none font-semibold mt-[3vw] select-none'>work</h1>
            <div className='absolute w-full h-full top-0'>
                {images.map((elem, index) => (elem.isActive && (<img 
                                className='absolute w-65 rounded-lg -translate-x-[50%] -translate-y-[50%] ' 
                                style={{top: elem.top, left: elem.left}} 
                                src={elem.url} alt="" key={index}
                            />))
                )}
            </div>
        </div>
    </div>
  )
}

export default Work