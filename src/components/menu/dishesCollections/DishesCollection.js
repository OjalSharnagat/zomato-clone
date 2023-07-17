import React from 'react'
import "./dishesCollection.css"
import Slider from 'react-slick';
import DishItem from './dishItem/dishItem';

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
        title: 'Chicken',
        cover:
         "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id: 5,
        title: 'Noodles',
        cover:
         "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
    },
    {
        id: 6,
        title: 'Momos',
        cover:
         "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
    },
    {
        id: 7,
        title: 'Rolls',
        cover:
         "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    // add more dish items here...
];


const settings = {
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    speed: 500,
    arrows: false,
};


const DishesCollection = () => {
  return (
    <div className='dishes-collection'>
      <div className='max-width'>
        <div className='collection-title'><h2>Popular Dishes</h2></div>
        <Slider {...settings}>
            {foodItems.map((item) => {
                return <DishItem item={item} />
            })}
        </Slider>
      </div>
    </div>
  )
}

export default DishesCollection;
