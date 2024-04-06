import React from 'react'
import apple from '../assets/apple.webp'

function Hero() {
  return (
    <div className='w-full h-screen z-1'>
        <div>
          <div className='z-2 absolute overflow-hidden'>
            <h1 className='px-6 pt-0 leading-tight font-normal font-kanit text-white  text-[7rem]'>
              FarmConnect: Connecting Farmers and merchants
            </h1>
            <br/>
            <p className='px-6 font-kanit text-[2.8rem] text-white font-medium'>Transparent trading of farm produces</p>
          </div>
          <img src={apple}/>
        </div>
    </div>
  )
}

export default Hero