import React from 'react';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import challenger from '../media/Challenger.jpg';
import downCoat from '../media/DownCoat.jpg';
import downJacket from '../media/DownJacket.jpg';
import fieldJacket from '../media/FieldJacket.jpg';
import lightWeight from '../media/LightWeightSynchilla.jpg';
import mountainClassic from '../media/MountainClassic.jpg';
import travel from '../media/Travel.jpg';


function Shop() {
  const [jackets, setJackets] = useState([
    {name:`Challenger Jacket`,src:challenger,id:uuidv4()},
    {name:`Down Coat`,src:downCoat,id:uuidv4()},
    {name:'Down Jacket',src:downJacket,id:uuidv4()},
    {name:'Field Jacket',src:fieldJacket,id:uuidv4()},
    {name:'Light Weight',src:lightWeight,id:uuidv4()},
    {name:'Mountain Classic',src:mountainClassic,id:uuidv4()},
    {name:'Travel Jacket',src:travel,id:uuidv4()}
  ])
  return (
    <div className="App">
      <h1>Shop</h1>

    <div className = "Shop-Card-Div">
      {jackets.map((index => (
        <div className = "Shop-Card">
          <img
            className = "Shop-Image"
            src = {index.src}
            key = {index.id}
          />
          <p>{index.name}</p>
          <button
            className = "Shop-Button">
              Add to Cart
          </button>
        </div>
      )))}
    </div>
    </div>
  );
}

export default Shop;