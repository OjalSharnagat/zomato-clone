import React from 'react'
import "./MenuCard.css"


const MenuCard = ({ fooditem }) => {
    const name = fooditem?.name ?? "";
    const image = fooditem?.image;
    const rating = fooditem?.rating;
    const description = fooditem?.description;
    const equipments = fooditem?.equipments ?? [];
    const id = fooditem?.id;

    return (
      <>
        <div className="item-card">
          <div className="item-info">
            <div className="name-rating">
              <div>
                <span className="food-item-name">{name}</span>{" "}
                <span className="rating">
                  {rating}
                  <i className="bx bxs-star star-rating"></i>
                </span>
              </div>
            </div>
            <div className='info-row'>
            <div className="equipments">
              {equipments.map((equipment, index) => (
                <span className="equipment-item" key={index}>
                  {equipment}
                </span>
              ))}
            </div>
            <div className='ingredients-section'>
              <div class="vl"></div>
              <div className='ingredients-box'>
                <span className='ingredients'>Ingredients</span>
                <span className='view-ingredients'>View list <i class='bx bx-chevron-right'></i> </span>
              </div>
            </div>
            </div>
            <p className="item-description">{description}</p>
          </div>
          <div className="item-image">
            <img src={image} alt={name} className="" />
          </div>
        </div>
        <div className="hl-2"></div>
      </>
    );
};

export default MenuCard;
