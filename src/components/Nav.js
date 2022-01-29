import React from 'react';
import { Link } from 'react-router-dom';
import Home from "./Home";
import Shop from "./Shop";
import ShoppingCart from '../media/ShoppingCart.png';


function Nav() {

let shopCart;
let buttons;
let images;
let shopText;
let pageTitle;

function hideDisplay(){
  images = document.querySelectorAll("img");
  buttons = document.querySelectorAll("button");
  shopText = document.querySelectorAll(".Shop-Text");
  pageTitle = document.querySelectorAll(".Page-Title");
  for(let i = 0; i < buttons.length; i++){
    if (shopCart.classList.contains('visible')===true){
    buttons[i].classList.add('hidden');
    images[i].classList.add('hidden');
    }else{
    buttons[i].classList.remove('hidden');
    images[i].classList.remove('hidden');
    }
  }
  for(let i = 0; i < shopText.length; i++){
    if (shopCart.classList.contains('visible')===true){
      shopText[i].classList.add('hidden');
    }else{
      shopText[i].classList.remove('hidden');
    }
  }
  for(let i = 0; i < pageTitle.length;i++){
    if(shopCart.classList.contains('visible')===true){
      pageTitle[i].classList.add('hidden');
    }else{
      pageTitle[i].classList.remove('hidden');
    }
  }
}


function showCart(){
  shopCart = document.querySelector('.cart');
  shopCart.classList.add('visible');
  hideDisplay();
}
function hideCart(){
  shopCart.classList.remove('visible');
  hideDisplay();
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
      <Link className = "nav-item" to = "/Shop">
        <li>About</li>
      </Link>
      <Link className = "nav-item" to>
        <li 
          className = "nav-cart"
          onClick = {showCart} > 
          <img 
            src = {ShoppingCart} 
            className = "cart-button">
          </img>
        </li>
      </Link>
    </ul>
    <div className = "cart">
      <div className = "cart-header">
        <h2>Shopping Cart</h2>
        <div className = "close-cart"
          onClick = {hideCart}>
            X
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Nav;