import React from 'react'

function Integration() {

  function openDiscordLink() {
    window.location.href = "https://public.tableau.com/app/profile/krishna.kakad/viz/varedharnacasestudynew/TOTALDASHBOARD?publish=yes";
  }

  return (
    <div className="w-full h-screen flex ">
      <div className="w-1/2 h-screen bg-[#fcf9f4] flex justify-center">
        <div className="flex flex-col items-center">  
          <h1 className="m-20 pt-16 text-[2.3rem]">With Integrated Researched studies</h1>  
          <p className='w-1/2 text-[1.3rem]'>
            To make diversification of crop yields better, we also have integrated an exclusive research project based on well researched datasets, which includes weather data and other crop yield data.
          </p>
        </div>
      </div>
      <div className="w-1/2 h-screen flex items-center  justify-center bg-[#fcf9f4]">
        <button onClick={openDiscordLink} className='text-[1.2rem] py-3 px-3 rounded-2xl bg-[#293e31] text-white hover:bg-[#fe8340]'>Click To view</button> 
      </div>
    </div>

  )
}

export default Integration