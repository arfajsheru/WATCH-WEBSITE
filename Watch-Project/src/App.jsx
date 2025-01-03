import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './Component/Navbar'
import Home from "./Pages/Home.jsx"
import Collection from "./Pages/Collection.jsx"
import GiftCards from "./Pages/GiftCards.jsx"
import WholeSale from "./pages/WholeSale.jsx"
import AboutUs from "./Pages/AboutUs.jsx"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection />}/>
        <Route path='/giftcards' element={<GiftCards />} />
        <Route path='/wholesale' element={<WholeSale />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App