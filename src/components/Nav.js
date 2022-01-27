import React from 'react';
import { Link } from 'react-router-dom';
import Home from "./Home";
import Shop from "./Shop";
import ShoppingCart from '../media/ShoppingCart.png';

function Nav() {
 return (
  <>
  <div className = "nav-main">
    <h2 className = "store-name">Store</h2>
    <ul className = "nav-bar">
      <Link className = "nav-item" to = "/">
        <li>Home</li>
      </Link>
      <Link className = "nav-item" to = "/Shop">
        <li>Shop</li> 
      </Link>
      <Link className = "nav-item" to = "/Shop">
        <li>About</li>
      </Link>
      <Link className = "nav-item" to = "/Shop">
        <li 
        className = "nav-cart"> 
          <img 
            src = {ShoppingCart} 
            className = "cart" >
          </img>
        </li>
      </Link>
    </ul>
  </div>
  </>
  )
}

export default Nav;