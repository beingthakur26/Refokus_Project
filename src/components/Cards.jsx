import React from 'react'
import Card from './Card'
import { hover } from 'motion'

function Cards() {
  return (
    <div className='w-full py-5'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-2'>
            <Card width={'basis-1/3'} show={true} />
            <Card width={'basis-2/3'} title={"Get In Touch"} heading={"Let's get to it, together."} show={false} hover="true"/>
        </div>
    </div>
  )
}

export default Cards