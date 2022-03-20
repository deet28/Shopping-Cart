import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Cart from './Cart';
import Footer from './Footer';



const RouteSwitch = () => {
 
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path = "/Shopping-Cart/" element = {<Home  />}/>
        <Route path = "/Shopping-Cart/cart" element = {<Cart />}/>
        <Route path = "/Shopping-Cart/shop" element = {<Shop />} />
        <Route path = "/Shopping-Cart/about" element = {<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default RouteSwitch;