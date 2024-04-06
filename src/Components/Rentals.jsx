import React from 'react'
import Card from './Card'

const cards=[
    {
        image: "https://via.placeholder.com/300", 
        title: "Card Title 1",
        description: "Card description 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        image: "https://via.placeholder.com/300", 
        title: "Card Title 2",
        description: "Card description 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        image: "https://via.placeholder.com/300", 
        title: "Card Title 3",
        description: "Card description 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        image: "https://via.placeholder.com/300", 
        title: "Card Title 3",
        description: "Card description 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
]

function Commerce() {

  return (
    <div className='m-20 '>
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
        <button className='border-zinc-400 bg-[#] border-width-4 px-5 py-3 rounded-3xl text-[1rem]'>View more</button>
      </div>
    </div>
  )
}

export default Commerce

