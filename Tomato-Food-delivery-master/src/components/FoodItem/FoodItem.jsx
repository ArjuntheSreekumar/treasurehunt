import React, { useContext } from 'react';
import './FoodItem.css';


const FoodItem = ({id,name,price,description,image}) => {
    //add to cart
  return (
    <div className='food-item'>
    <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
    </div>
    <div className="food-item-info">
        <p className="food-item-desc">
            {description}
        </p>
    </div>
</div>

  )
}

export default FoodItem