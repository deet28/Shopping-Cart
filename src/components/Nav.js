import React from 'react';
import { Link } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import ShoppingCart from '../media/ShoppingCart.png';

function Nav() {
  
  let shopCart;
  
  function showCart(){
    shopCart = document.querySelector('.cart');
    shopCart.classList.add('visible');
  }
 
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
        <Link className = "nav-item" to = "/About">
          <li>About</li>
        </Link>
        <Link className = "nav-item" to>
          <li 
            className = "nav-cart"
            onClick = {showCart}> 
            <img 
              src = {ShoppingCart} 
              className = "cart-button">
            </img>
          </li>
        </Link>
      </ul>
    </div>
    </>
  )
}

export default Nav;