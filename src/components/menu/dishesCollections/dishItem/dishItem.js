import React from 'react'
import "./dishItem.css"

const DishItem = ({item}) => {
  return (
    <div>
         <div className='dish-item-cover'>
            <div className='dish-item-overlay'>
              <span className='dish-item-title'>{item.title}</span>
            </div>
            <img 
              src={item.cover} 
              className='dish-item-image' 
              alt={item.title} 
            />
            <div className='gradient-bg'></div>
         </div>
    </div>
  );
};

export default DishItem;
