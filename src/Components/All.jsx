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
      <h1 className='m-4 mb-10 text-[3rem] font-kanit'>Services</h1>
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

