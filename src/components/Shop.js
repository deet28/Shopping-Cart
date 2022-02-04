import React from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { actionCreators } from "../state/index"
import { bindActionCreators } from "redux"
import {v4 as uuidv4} from 'uuid'
import canvas from '../media/CanvasAnorak.jpg';
import challenger from '../media/Challenger.jpg';
import downCoat from '../media/DownCoat.jpg';
import downJacket from '../media/DownJacket.jpg';
import duckJacket from '../media/DuckJacket.jpg';
import fieldJacket from '../media/FieldJacket.jpg';
import insulatedJacket from '../media/Insulated.jpg';
import lightWeight from '../media/LightWeightSynchilla.jpg';
import mountainClassic from '../media/MountainClassic.jpg';
import quiltedLiner from '../media/QuiltedLiner.jpg';
import sandStone from '../media/SandStone.jpg';
import travel from '../media/Travel.jpg';

function Shop() {

  const state = useSelector((state)=>state);
  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(actionCreators,dispatch)


  const [jackets, setJackets] = useState([
    {name:`Canvas Anorak`,src:canvas,price:48.50,newPrice:48.50,id:uuidv4(),count:0},
    {name:`Challenger Jacket`,src:challenger,price:98.00,newPrice:98.00,id:uuidv4(),count:0},
    {name:`Down Coat`,src:downCoat,price:130.00,newPrice:130.00,id:uuidv4(),count:0},
    {name:`Down Jacket`,src:downJacket,price:170.00,newPrice:170.00,id:uuidv4(),count:0},
    {name:`Duck Jacket`,src:duckJacket,price:60.00,newPrice:60.00,id:uuidv4(),count:0},
    {name:`Field Jacket`,src:fieldJacket,price:89.50,newPrice:89.50,id:uuidv4(),count:0},
    {name:`Insulated Jacket`,src:insulatedJacket,price:79.50,newPrice:79.50,id:uuidv4(),count:0},
    {name:'Light Weight',src:lightWeight,price:50.00,newPrice:50.00,id:uuidv4(),count:0},
    {name:'Mountain Classic',src:mountainClassic,price:99.50,newPrice:99.50,id:uuidv4(),count:0},
    {name:`Quilted Liner`,src:quiltedLiner,price:70.00,newPrice:70.00,id:uuidv4(),count:0},
    {name:`Sand Stone Jacket`,src:sandStone,price:59.50,newPrice:59.50,id:uuidv4(),count:0},
    {name:'Travel Jacket',src:travel,price:90.00,newPrice:90.00,id:uuidv4(),count:0}
  ])

 
  return (
  <div className="App">
      <h1 className = "page-title-shop">Shop</h1>
    <div className = "shop-card-div">
      {jackets.map((index => (
        <div className = "shop-card" key = {index.id}>
          <img
            className = "shop-image"
            src = {index.src}
            key = {index.id}
          />
          <p className = "shop-text">{index.name}</p>
          <p className = "shop-text">${index.price.toFixed(2)}</p>
            <button className = "pseudo-shop-button">Add to Cart</button>
            <button
            name = {index.name}
            value = {index.price}
            id = {index.id}
            title = {index.count}
            className = "shop-button"
            onClick = {addToCart}>
            Add to Cart
          </button>
        </div>
      )))}
     </div>
    </div>
  );
 }

export default Shop;

