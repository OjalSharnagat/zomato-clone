import React from 'react'
import "./menu.css"
import Filters from '../common/filters/filters';
import DishesCollection from './dishesCollections/DishesCollection';
import ExploreMenu from '../common/exploreSection/ExploreMenu';
import { dishes } from '../../data/MenuData';

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

const menuList = dishes;

const Menu = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList = {cuisinesFilters} />
      </div>
      <div>
        <DishesCollection />
        <ExploreMenu list={menuList} />
      </div>
    </div>
  )
};

export default Menu;
