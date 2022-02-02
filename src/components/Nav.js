import React from 'react';
import { useState }from 'react';
import Cart from './Cart'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { actionCreators } from "../state/index"
import { bindActionCreators } from "redux"
import ShoppingCart from '../media/ShoppingCart.png';

function Nav() {
  let amount = 0;

  const state = useSelector((state)=>state);

  const amountOfItems = useSelector(state => {
    state.cart.map((index => {
      let temp = parseInt(index.target.title);
      amount += parseInt(temp);
    }))
    return amount;
  })
  
  let shopCart;
  let buttons;
  let images;
  let shopText;
  let pageTitle;

  function showCart(){
    shopCart = document.querySelector('.cart');
    images = document.querySelectorAll("img");
    buttons = document.querySelectorAll("button");
    shopText = document.querySelectorAll(".Shop-Text");
    pageTitle = document.querySelectorAll(".Page-Title");
    
    shopCart.classList.add('visible');
    for(let i = 0; i < buttons.length; i++){
      buttons[i].classList.add('hidden');
      images[i].classList.add('hidden');
    }
    for(let i = 0; i < shopText.length; i++){
        shopText[i].classList.add('hidden');
    }
    for(let i = 0; i < pageTitle.length;i++){
        pageTitle[i].classList.add('hidden');
    }
  }
 
  return (
    <>
    <Cart></Cart>
    <div className = "nav-main">
      <h2 className = "store-name">Store</h2>
      <ul className = "nav-bar">
        <Link className = "nav-item" to = "/Home">
          <li>Home</li>
        </Link>
        <Link className = "nav-item" to = "/Shop">
          <li>Shop</li> 
        </Link>
        <Link className = "nav-item" to = "/About">
          <li>About</li>
        </Link>
          <li 
            className = "nav-cart nav-item"
            onClick = {showCart}> 
            <img 
              src = {ShoppingCart} 
              className = "cart-button">
            </img>
            <div>{amount}</div>
          </li>
      </ul>
    </div>
    </>
  )
}

export default Nav;