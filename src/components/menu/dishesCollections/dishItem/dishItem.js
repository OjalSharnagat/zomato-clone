import React from 'react'
import "./dishItem.css"

const DishItem = ({item}) => {
  return (
    <div>
         <div className='dish-item-cover'>
            <div className='dish-item-overlay'>
              <h3 className='dish-item-title'>{item.title}</h3>
            </div>
            <img 
              src={item.cover} 
              className='dish-item-image' 
              alt={item.title} 
            />
         </div>
    </div>
  );
};

export default DishItem;
