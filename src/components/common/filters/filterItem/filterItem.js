import React from 'react'
import "./filterItem.css"

const FilterItem = ({filter}) => {
  return (
    <div className="filter-item">
      <div className="filter-name">{filter.title}</div>
    </div>
  )
};

export default FilterItem;
