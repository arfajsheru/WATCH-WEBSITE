import React from 'react'
import Navbar from '../Component/Navbar'
import Banner from '../Component/Banner'
import BestSellers from '../Component/BestSellers'
import ShopAndSave from '../Component/ShopAndSave'
import Footer from '../Component/Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <BestSellers />
      <ShopAndSave />
      <Footer />
    </div>
  )
}

export default Home