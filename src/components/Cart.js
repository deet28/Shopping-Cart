import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { actionCreators } from "../state/index"
import { bindActionCreators } from "redux"

function Cart() {

  let amount = 0;

  const state = useSelector((state)=>state);
  const dispatch = useDispatch()
  const { removeFromCart } = bindActionCreators(actionCreators,dispatch)

  let shopCart;
  let buttons;
  let images;
  let shopText;
  let pageTitle;

  function makeCart(){
    if (state.cart.length === 0){
    return<div>
        <p>Nothing in Cart</p>
      </div>
    }
    else if (state.cart.length > 0){
      return state.cart.map((index => (
      <div className = "cart-item-div" key = {index.target.id}>
        <p className = "cart-item-listing"> {index.target.name}</p>
        <p className = "cart-item-listing"> ${index.target.newPrice}</p>
        <p className = "cart-item-listing"> {index.target.title} </p>
      </div>
      )))
    }
  }

  function hideDisplay(){
    shopCart = document.querySelector('.cart');
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