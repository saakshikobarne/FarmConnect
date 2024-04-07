import React from 'react'
import Hero from './Hero'
import Ecom from './About'
import Commerce from './Commerce'
import Rentals from './Rentals'
import Storage from './Storage'
import Integration from './Integration'
import All from './All.jsx'


function Home() {
  return (
    <>
      <Hero/>
      <Ecom/>
      <Integration/>
      <Commerce/>
      <Rentals/>
      <Storage/>
    </>
  )
}

export default Home