import React from 'react';
import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { actionCreators } from "../state/index"
import { bindActionCreators } from "redux"

function Cart() {

  const state = useSelector((state)=>state);
  const dispatch = useDispatch()
  const { addToCart } = bindActionCreators(actionCreators,dispatch);
  const { removeFromCart } = bindActionCreators(actionCreators,dispatch)

  let shopCart;
  let navButtons;
  let buttons;
  let images;
  let shopText;
  let pageTitle;
  let textHome;
  let textAbout;
  let pseudoButtons;
  let total = 0;
  let totalPrice;
  let footerText;
  let storeName;



  function makeCart(){
    if (state.cart.length === 0){
    return<div>
        <p className = "empty-cart-text auto">Nothing in Cart</p>
      </div>
    }
    else if (state.cart.length > 0){
      
      return state.cart.map((index => (

      <div className = "cart-item-div" key = {index.target.id}>
        <div className = "cart-item-pic auto">
        <img className = "cart-pic auto"src = {index.target.parentElement.firstElementChild.src}></img>
        </div>
        <p className = "cart-item-listing auto"> {index.target.name}</p>
        <p className = "cart-item-listing auto"> ${index.target.newPrice}</p>
        <div className = "cart-count auto">
          <button 
            type = "submit" 
            name = {index.target.name}
            value = {index.target.price}
            id = {index.target.id}
            title = {index.target.count}
            onClick = {removeFromCart}
            className = "cart-count-minus auto">-
          </button>
          <p className = "cart-item-listing auto"> {index.target.title} </p>
          <button 
            type = "submit auto" 
            name = {index.target.name}
            value = {index.target.price}
            id = {index.target.id}
            title = {index.target.count}
            className = "cart-count-plus auto"
            onClick = {addToCart}>+
            </button>
        </div>
      </div>
      )))
    }
  }
  const makeTotal = useSelector(state => {
    state.cart.map((index => {
      let temp = parseFloat(index.target.newPrice);
      total += temp;
    }))
    totalPrice = total.toFixed(2);
    if(totalPrice == 0){
      return total = '';
    } else {
      total = `Total:$${totalPrice}`;
      return total;
    }
    
  })

  function hideDisplay(){
    shopCart = document.querySelector(".cart");
    images = document.querySelectorAll(".shop-image");
    buttons = document.querySelectorAll(".shop-button");
    shopText = document.querySelectorAll(".shop-text");
    pageTitle = document.querySelectorAll(".page-title");
    navButtons = document.querySelectorAll(".nav-item");
    textHome = document.querySelectorAll(".home-text");
    textAbout = document.querySelectorAll(".about-text");
    pseudoButtons = document.querySelectorAll(".pseudo-shop-button");
    footerText = document.querySelector(".Contact-Main");
    storeName = document.querySelector('.store-name');

    footerText.classList.remove('opaque-text');
    storeName.classList.remove('opaque-text');

    for(let i = 0; i < buttons.length; i++){
      if (shopCart.classList.contains('visible')===true){
      buttons[i].classList.add('hidden-button');
      images[i].classList.add('hidden');
      }else{
      buttons[i].classList.remove('hidden-button');
      images[i].classList.remove('hidden');
      }
    }
    for(let i = 0; i<pseudoButtons.length;i++){
      if(shopCart.classList.contains('visible')===true){
        pseudoButtons[i].classList.add('pseudo-dummy')
      } else {
        pseudoButtons[i].classList.remove('pseudo-dummy')
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
    for(let i = 0;i < navButtons.length; i++){
      if(shopCart.classList.contains('visible')===true){
        navButtons[i].classList.add('hidden-list')
      } else {
        navButtons[i].classList.remove('hidden-list')
      }
      for(let i = 0;i < textHome.length; i++){
        if(shopCart.classList.contains('visible')===true){
          textHome[i].classList.add('hidden')
        } else {
          textHome[i].classList.remove('hidden')
        }
      }
      for(let i = 0;i < textAbout.length; i++){
        if(shopCart.classList.contains('visible')===true){
          textAbout[i].classList.add('hidden')
        } else {
          textAbout[i].classList.remove('hidden')
        }
      }
    }
  }

  function hideCart(){
    shopCart = document.querySelector('.cart');
    shopCart.classList.remove('visible');
    hideDisplay();
  }
  
  function closeCartAuto(e){
    if (e.target.classList.contains('nav-cart')==true
    ||e.target.classList.contains('nav-item')==true
    ||e.target.classList.contains('cart-button')==true
    ||e.target.classList.contains('nav-cart-amount')==true){
      return;
    } else if (e.target.classList.contains('auto')==true){
      return;
    } else {
      console.log('working')
      return hideCart();
    }
  }

  useEffect(()=>{
    window.addEventListener("click",closeCartAuto)
      return () => {
      window.removeEventListener('click', closeCartAuto); 
    }
  },[])

  return (
    <>
    <div className = "cart auto">
        <div className = "cart-header auto">
          <h2 className = "cart-header-text auto">Shopping Cart</h2>
          <div className = "close-cart"
            onClick = {hideCart}>
              X
          </div>
        </div>
        {makeCart()}
        <p className = "cart-total auto">{total}</p>
        <button className = "cart-checkout auto">Checkout</button>
    </div>
    </>
  );
}

export default Cart;