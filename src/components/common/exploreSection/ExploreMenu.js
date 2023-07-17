import React from 'react'
import "./ExploreMenu.css"
import MenuCard from './exploreCard/MenuCard'

const ExploreMenu = ({ list }) => {
  return (
    <>
      <div className="max-width menu-section">
        <div className="hl"></div>
        <div className="menu-alignment">
         <div className='recommended-menu'>
         <span className="menu-category-name">
            Recommended <i class="bx bx-caret-down"></i>
          </span>
          <span className='Menu-Button'>Menu</span>
         </div>
          <div className="menu-column">
            {list.map((fooditem) => {
              return <MenuCard fooditem={fooditem} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreMenu;
