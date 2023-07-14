import React from 'react'
import "./menu.css"
import Filters from '../common/filters/filters';
import DishesCollection from './dishesCollections/DishesCollection';

const cuisinesFilters = [
  {
    id: 1,
    title: 'Indian',
  },
  {
    id: 2,
    title: 'Chinese',
  },
  {
    id: 3,
    title: 'Italian',
  },
  {
    id: 4,
    title: 'French',
  },
  {
    id: 5,
    title: 'Mexican',
  },
];

const Menu = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList = {cuisinesFilters} />
      </div>
      <div>
        <DishesCollection />
      </div>
    </div>
  )
};

export default Menu;
