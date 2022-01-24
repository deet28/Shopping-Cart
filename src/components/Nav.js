import React from 'react';
import { Link } from 'react-router-dom';
import Home from "./Home";
import Shop from "./Shop";


function Nav() {
 return (
  <ul className = "nav-bar">
    <Link className = "nav-item" to = "/">
      <li>Home</li>
    </Link>
    <Link className = "nav-item" to = "/Shop">
      <li>Shop</li> 
    </Link>
     <li>About</li>
  </ul>
  )
}

export default Nav;