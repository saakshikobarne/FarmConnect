import React from 'react'
import Card from './Card'

const cards=[
  {
    image: "https://media.istockphoto.com/id/1256742117/photo/tractor-in-the-field-stock-photo.jpg?s=1024x1024&w=is&k=20&c=H2S3J8ttmJzevXet-FXfsyFLXpei_4aXao6Fqlqr2YA=", 
      title: "Tractor",
      description: "Available For Now."
  },
  {
    image: "https://media.istockphoto.com/id/178887371/photo/garden-tiller-to-work.jpg?s=1024x1024&w=is&k=20&c=ZvKhpxDZfbvuWay7Wb4zDAJAj1Q6GjtwpeHTtw8f0MA=", 
      title: "Cultivator",
      description: "Available For Now."
  },
  {
    image: "https://media.istockphoto.com/id/1322433940/photo/solar-panels-which-can-run-submerge-water-pump-for-irrigation-and-distribution-of-water-in.jpg?s=1024x1024&w=is&k=20&c=pY5_h3Y7FT7KsO_Ja4dmJqeNvdNxAykJskrrHOhRwgA=", 
      title: "Irrigation System",
      description: "Available For Now"
  },
  {
    image: "https://media.istockphoto.com/id/1471277999/photo/fan-production-equipment-cooling-fan-of-condition-or-heating-and-drying-system-in-warehouse.jpg?s=1024x1024&w=is&k=20&c=JeJt0s331hlrL7NRsKJd9q1i6bXf5rrIlnX3qkI7Sgw=", 
    title: "Grain Dryer",
    description: "Available For Now"
  },
]

function Commerce() {

  function openDiscordLink() {
    window.location.href ="http://localhost:5173/commerce";
  }


  return (
    <div className='m-20' id='rentals'>
      <h1 className='m-4 mb-10 text-[3rem] font-kanit'>Rental Services</h1>
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

export default Commerce

