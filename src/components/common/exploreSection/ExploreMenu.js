import React from 'react'
import "./ExploreMenu.css"
import MenuCard from './exploreCard/MenuCard'

const ExploreMenu = ({ list }) => {
  return (
    <div className='max-width menu-section'>
        <div className='hl'></div>
      <h2 className='menu-category-name'>Recommended <i class='bx bx-caret-down'></i></h2>
      <div className='menu-column'>
        {list.map((fooditem) => {
            return <MenuCard fooditem={fooditem} />
        })}
      </div>
    </div>
  );
}

export default ExploreMenu;
