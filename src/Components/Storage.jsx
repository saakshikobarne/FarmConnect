import React from 'react'
import Card from './Card'

const cards=[
  {
      image: "https://media.istockphoto.com/id/1156873334/photo/dairy-factory-in-africa.jpg?s=1024x1024&w=is&k=20&c=EN0RilqY-0-OEsepwuMBWbAxAEjwFkgmOPxdBqBg8g8=", 
      title: "Pune",
      description: "Cold storage available now in Pune region"
  },
  {
    image: "https://media.istockphoto.com/id/154962254/photo/food-moving-through-production-line-in-factory.jpg?s=1024x1024&w=is&k=20&c=DwJ3GyqneOlCoBQA7L-XQyBh7UbCxxSDECt-7YS_tfw=", 
      title: "Nashik",
      description: "Cold storage available now in Nashik.."
  },
  {
    image: "https://media.istockphoto.com/id/1131834506/photo/two-quality-professionals-in-white-sterile-uniforms-checking-quality-of-salt-sticks-while.jpg?s=1024x1024&w=is&k=20&c=f0nir1jEYK5tQwdY9Zr95NeEGhC3EuKwO_SFiwgZTjc=", 
      title: "Nagpur",
      description: "Cold storage available now in Nagpur."
  },
  {
    image: "https://media.istockphoto.com/id/1272538671/photo/canned-food-products-on-conveyor-belt-in-distribution-warehouse.jpg?s=1024x1024&w=is&k=20&c=p4idIH9c-lX6vZreIw53NFIP50VBMb5292C1MFuoFoI=", 
      title: "Sambhajinagar",
      description: "Cold storage available now in Sambhajinagar"
  },
]

function Storage() {

  function openDiscordLink() {
    window.location.href = "http://localhost:5173/commerce";
  }


  return (
    <div id='storage' className='p-20 bg-[#dacec2]'>
      <h1 className='m-4 mb-10 text-[3rem] font-kanit'>Food processing industries</h1>
      <div className="flex flex-col items-center justify-center h-2/3 overflow-y-auto px-4">
        <div className="grid grid-cols-4 gap-6">
          {cards.map((item, index)=>(
              <Card key={index}
                  image= {item.image}
                  title={item.title}
                  description={item.description}
            />
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center mt-12'>
        <button onClick={openDiscordLink} className='border-zinc-400 bg-[#] border-width-4 px-5 py-3 rounded-3xl text-[1rem]'>View more</button>
      </div>
    </div>
  )
}

export default Storage

