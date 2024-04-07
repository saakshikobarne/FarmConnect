import React from 'react'
import Card from './Card'

const cards=[
  {
      image: "https://plus.unsplash.com/premium_photo-1674347954785-7604a0220776?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      title: "Seeds",
      description: "Nature's potential packaged in a tiny shell, seeds hold the promise of future harvests"
  },
  {
    image: "https://media.istockphoto.com/id/1450576005/photo/tomato-isolated-tomato-on-white-background-perfect-retouched-tomatoe-side-view-with-clipping.jpg?s=1024x1024&w=is&k=20&c=Z3Mznpnxt4lB7k3HE4iHBva6xuYWq7KzG-RE_cTQl5A=", 
      title: "Fertilizers",
      description: "Essential nutrients in every granule, fertilizers fuel plant growth for bountiful harvests."
  },
  {
    image: "https://media.istockphoto.com/id/1385680850/photo/protection-of-crops-from-pests-and-diseases-pesticide-bottle-at-agriculture-field.jpg?s=1024x1024&w=is&k=20&c=MVUp-P6gYCmCOKALLUEh1_HK5FBClUfz5zUhP9HwnRs=", 
      title: "Pesticides",
      description: "Guardians of crops, pesticides shield against threats, ensuring healthy yields."
  },
  {
    image: "https://images.unsplash.com/photo-1598512752271-33f913a5af13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    title: "Organic Fertilizers",
    description: "Nourishing the soil organically, fertilizers cultivate sustainable growth from the ground up."
  },
]

function Commerce() {

  return (
    <div className='p-20 bg-[#dacec2]'>
      <h1 className='m-4 mb-10 text-[3rem] font-kanit'>E-commerce Marketplace</h1>
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
        <div className="grid grid-cols-4 gap-6">
          {cards.map((item, index)=>(
              <Card key={index}
                  image= {item.image}
                  title={item.title}
                  description={item.description}
                  
            />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-6">
          {cards.map((item, index)=>(
              <Card key={index}
                  image= {item.image}
                  title={item.title}
                  description={item.description}
                  
            />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-6">
          {cards.map((item, index)=>(
              <Card key={index}
                  image= {item.image}
                  title={item.title}
                  description={item.description}
                  
            />
          ))}
        </div>
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
        <button className='border-zinc-400 bg-[#] border-width-4 px-5 py-3 rounded-3xl text-[1rem]'>View more</button>
      </div>
    </div>
  )
}

export default Commerce

