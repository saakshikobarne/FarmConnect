import React from 'react'
import Logo from '../assets/Logo.svg'

function Navbar() {

  const items= [
    {
      title: "Home",
      href:"#home",
      id: 1
    },
    {
      title: "E-commerce",
      href: "#commerce",
      id: 2
    },
    {
      title: "Rentals",
      href: "#rentals",
      id:3
    },
    {
      title: "Storage",
      href: "#storage",
      id: 4
    }
  ];

  return (
    <div className='w-full h-[6rem] bg-[#293e31] flex items-center'>
      <div className='flex items-center pl-4 w-1/4 h-full bg-[#fe8340]'>
        <h1 className='text-[#293e31] font-light'>FarmConnect</h1>
      </div>

      <div className='ml-12 flex gap-10'>
        {items.map((item, index)=>(
          <a href={item.href} className='font-light  text-[1.3rem] text-decoration-none text-white '>{item.title}</a>
        ))}
      </div>

      <div className='ml-24 flex gap-10 '>
        <button className='px-3 py-1 font-light text-[1.2rem] rounded-3xl text-[#293e31] bg-[#fe8340] border-thin'>Login</button>
        <button className='px-3 py-1 font-light text-[1.2rem] rounded-3xl text-[#293e31] bg-[#fe8340] border-thin'>SignUp</button>
      </div>

      <div className='ml-32 bg-[#fe8340] flex items-center justify-center w-28 h-full'>
          <img src={Logo} height={85} width={85}/>
      </div>
    </div> 
  )
}

export default Navbar