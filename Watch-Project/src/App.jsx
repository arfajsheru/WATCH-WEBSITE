import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "./Pages/Home.jsx"
import Collection from "./Pages/Collection.jsx"
import GiftCards from "./Pages/GiftCards.jsx"
import Wholesale from './Wholesale.jsx'
import AboutUs from "./Pages/AboutUs.jsx"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection />}/>
        <Route path='/giftcards' element={<GiftCards />} />
        <Route path='/wholesale' element={<Wholesale />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App