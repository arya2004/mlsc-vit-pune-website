import React from 'react'
import About from './About.card'
import Offer from './Offer.card'
import GetInvolved from './GetInvolved.card'

const page = () => {
  return (
    <div className='h-screen w-screen flex flex-row items-center justify-evenly'>
        <About />
        <Offer />
        <GetInvolved />
    </div>
  )
}

export default page