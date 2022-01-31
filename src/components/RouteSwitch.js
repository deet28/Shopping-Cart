import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';
import Nav from './Nav';
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";



const RouteSwitch = () => {
 
  return (
    <>
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path = "/" element = {<Cart />}/>
        <Route path = "/Home" element = {<Home  />}/>
        <Route path = "/shop" element = {<Shop />} />
        <Route path = "/about" element = {<About />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteSwitch;