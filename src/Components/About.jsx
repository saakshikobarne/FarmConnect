import React from 'react'
import Mill from '../assets/Mill.svg'

function Ecom() {
  return (
    <div className="w-full h-screen flex bg-[#dacec2]">
      <div className="w-1/2 h-screen  flex justify-center">
        <div className="flex flex-col items-center">  
          <h1 className="m-20 pt-16 text-[2.5rem]">One Nation, One market</h1>  
          <p className='w-1/2 text-[1.2rem]'>
            We aim to revolutionize agricultural trade in India by providing a unified platform for farmers, merchants, and consumers across the nation. To achieve this goal, a robust and scalable web application architecture is essential. This report outlines a three-tier architecture design tailored to the specific requirements of the initiative.
          </p>
        </div>
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center ">
        <img src={Mill} height={400} width={400} />  
      </div>
    </div>

  )
}

export default Ecom