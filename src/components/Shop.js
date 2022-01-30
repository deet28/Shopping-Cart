import React from 'react';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import Nav from './Nav';
import canvas from '../media/CanvasAnorak.jpg';
import challenger from '../media/Challenger.jpg';
import downCoat from '../media/DownCoat.jpg';
import downJacket from '../media/DownJacket.jpg';
import duckJacket from '../media/DuckJacket.jpg';
import fieldJacket from '../media/FieldJacket.jpg';
import insulatedJacket from '../media/Insulated.jpg';
import lightWeight from '../media/LightWeightSynchilla.jpg';
import mountainClassic from '../media/MountainClassic.jpg';
import quiltedLiner from '../media/QuiltedLiner.jp2';
import sandStone from '../media/SandStone.jpg';
import travel from '../media/Travel.jpg';
import ShoppingCart from '../media/ShoppingCart.png';

function Shop() {
  
  const [jackets, setJackets] = useState([
    {name:`Canvas Anorak`,src:canvas,price:`$48.50`,id:uuidv4()},
    {name:`Challenger Jacket`,src:challenger,price:`$98.00`,id:uuidv4()},
    {name:`Down Coat`,src:downCoat,price:`$130.00`,id:uuidv4()},
    {name:`Down Jacket`,src:downJacket,price:`$170.00`,id:uuidv4()},
    {name:`Duck Jacket`,src:duckJacket,price:`$60.00`,id:uuidv4()},
    {name:`Field Jacket`,src:fieldJacket,price:`$89.50`,id:uuidv4()},
    {name:`Insulated Jacket`,src:insulatedJacket,price:`$79.50`,id:uuidv4()},
    {name:'Light Weight',src:lightWeight,price:`$50.00`,id:uuidv4()},
    {name:'Mountain Classic',src:mountainClassic,price:`$99.50`,id:uuidv4()},
    {name:`Quilted Liner`,src:quiltedLiner,price:`$70.00`,id:uuidv4()},
    {name:`Sand Stone Jacket`,src:sandStone,price:`$59.50`,id:uuidv4()},
    {name:'Travel Jacket',src:travel,price:`$90.00`,id:uuidv4()}
  ])
  const [cart, setCart] = useState([
    
  ]);
  
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
  
  function hideCart(){
    shopCart = document.querySelector('.cart');
    shopCart.classList.remove('visible');
    hideDisplay();
  }

  function cartAdd(e){
    for(let i = 0; i < jackets.length; i++){
      if(e.target.name === jackets[i].name){
        setCart([...cart,jackets[i]])
      }
    }
    console.log(cart);
  }

  return (
  <div className="App">
      <h1 className = "Page-Title">Shop</h1>
    
    <div className = "Shop-Card-Div">
      {jackets.map((index => (
        <div className = "Shop-Card" key = {index.id}>
          <img
            className = "Shop-Image"
            src = {index.src}
            key = {index.id}
          />
          <p className = "Shop-Text">{index.name}</p>
          <p className = "Shop-Text">{index.price}</p>
          <button
            name = {index.name}
            className = "Shop-Button"
            onClick = {cartAdd}>
              Add to Cart
          </button>
        </div>
      )))}
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
    </div>
  );
 }

export default Shop;