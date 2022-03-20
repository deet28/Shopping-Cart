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
        <Route path = "/" element = {<Home  />}/>
        <Route path = "/cart" element = {<Cart />}/>
        <Route path = "/shop" element = {<Shop />} />
        <Route path = "/about" element = {<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default RouteSwitch;