import React from 'react'
import "./dishesCollection.css"

const foodItems = [
    {
        id: 1,
        title: 'Biryani',
        cover:
         "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id: 2,
        title: 'Pizza',
        cover:
         "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id: 3,
        title: 'Burger',
        cover:
         "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id: 4,
        title: 'Sushi',
    },
    {
        id: 5,
        title: 'Noodles',
    },
    {
        id: 6,
        title: 'Rice',
    },
    {
        id: 7,
        title: 'Fries',
    },
    // add more dish items here...
]


const DishesCollection = () => {
  return (
    <div className='dishes-collection'>
      <div className='max-width'>
        <div className='collection-title'>Popular Dishes</div>

      </div>
    </div>
  )
}

export default DishesCollection
