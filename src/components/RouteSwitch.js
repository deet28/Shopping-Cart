import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';
import Home from "./Home";
import Shop from "./Shop";
import Nav from './Nav';


const RouteSwitch = () => {
 
  return (
    <>
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/shop" element = {<Shop />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteSwitch;