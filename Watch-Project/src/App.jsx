import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home.jsx";
import Collection from "./Pages/Collection.jsx";
import GiftCards from "./Pages/GiftCards.jsx";
import Wholesale from "./Pages/Wholesale.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Navbar from "./Component/Navbar.jsx";
import Footer from "./Component/Footer.jsx";
import Cart from "./Pages/Cart.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/giftcards" element={<GiftCards />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
