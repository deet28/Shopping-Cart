import React from 'react';
import { useState }from 'react';
import Cart from './Cart'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
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
  let navButtons;
  let textHome;
  let textAbout;
  let pseudoButtons;

  function showCart(){
    shopCart = document.querySelector('.cart');
    images = document.querySelectorAll(".shop-image");
    buttons = document.querySelectorAll(".shop-button");
    shopText = document.querySelectorAll(".shop-text");
    pageTitle = document.querySelectorAll(".page-title");
    navButtons = document.querySelectorAll(".nav-item")
    textHome = document.querySelectorAll(".home-text")
    textAbout = document.querySelectorAll(".about-text")
    pseudoButtons = document.querySelectorAll(".pseudo-shop-button");
    
    shopCart.classList.add('visible');
    for(let i = 0; i < buttons.length; i++){
      buttons[i].classList.add('hidden-button');
      images[i].classList.add('hidden');
      pseudoButtons[i].classList.add('pseudo-dummy');
    }
    for(let i = 0; i < shopText.length; i++){
        shopText[i].classList.add('hidden');
    }
    for(let i = 0; i < pageTitle.length;i++){
        pageTitle[i].classList.add('hidden');
    }
    for(let i = 0; i< navButtons.length;i++){
      navButtons[i].classList.add('hidden-list');
    }
    for(let i = 0; i < textHome.length; i++){
      textHome[i].classList.add('hidden');
    }
    for(let i = 0; i < textAbout.length; i++){
      textAbout[i].classList.add('hidden');
    }
  }
 
  return (
    <>
    <Cart></Cart>
    <div className = "nav-main">
      <h2 className = "store-name">coats.</h2>
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