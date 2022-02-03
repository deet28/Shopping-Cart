import React from 'react';
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
  let text;

  function makeCart(){
    if (state.cart.length === 0){
    return<div>
        <p>Nothing in Cart</p>
      </div>
    }
    else if (state.cart.length > 0){
      return state.cart.map((index => (
      <div className = "cart-item-div" key = {index.target.id}>
        <div className = "cart-item-pic">
        <img className = "cart-pic"src = {index.target.parentElement.firstElementChild.src}></img>
        </div>
        <p className = "cart-item-listing"> {index.target.name}</p>
        <p className = "cart-item-listing"> ${index.target.newPrice}</p>
        <div className = "cart-count">
          <button 
            type = "submit" 
            name = {index.target.name}
            value = {index.target.price}
            id = {index.target.id}
            title = {index.target.count}
            onClick = {removeFromCart}
            className = "cart-count-minus">-
          </button>
          <p className = "cart-item-listing"> {index.target.title} </p>
          <button 
            type = "submit" 
            name = {index.target.name}
            value = {index.target.price}
            id = {index.target.id}
            title = {index.target.count}
            className = "cart-count-plus"
            onClick = {addToCart}>+
            </button>
        </div>
        
      </div>
      )))
    }
  }

  function hideDisplay(){
    shopCart = document.querySelector(".cart");
    images = document.querySelectorAll(".Shop-Image");
    buttons = document.querySelectorAll(".Shop-Button");
    shopText = document.querySelectorAll(".Shop-Text");
    pageTitle = document.querySelectorAll(".Page-Title");
    navButtons = document.querySelectorAll(".nav-item");
    text = document.querySelectorAll(".Home-Text");
    
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
    for(let i = 0;i < navButtons.length; i++){
      if(shopCart.classList.contains('visible')===true){
        navButtons[i].classList.add('hidden-list')
      } else {
        navButtons[i].classList.remove('hidden-list')
      }
      for(let i = 0;i < text.length; i++){
        if(shopCart.classList.contains('visible')===true){
          text[i].classList.add('hidden')
        } else {
          text[i].classList.remove('hidden')
        }
      }
    }
  }

  function hideCart(){
    shopCart = document.querySelector('.cart');
    shopCart.classList.remove('visible');
    hideDisplay();
  }

  return (
    <>
    <div className = "cart">
        <div className = "cart-header">
          <h2>Shopping Cart</h2>
          <div className = "close-cart"
            onClick = {hideCart}>
              X
          </div>
        </div>
        {makeCart()}
    </div>
    </>
  );
}

export default Cart;