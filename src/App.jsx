import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Ecom from './Components/About'
import Commerce from './Components/Commerce'
import Rentals from './Components/Rentals'
import Storage from './Components/Storage'
import Footer from './Components/Footer'

import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Ecom/>
      <Commerce/>
      <Rentals/>
      <Storage/>
      <Footer/>
    </>
    
  )
}

export default App
