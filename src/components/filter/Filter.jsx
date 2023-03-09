import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter_item">
        <p>{}items left</p>
        <span>Clear completed</span>
      </div>
      <div className="filters">
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
    </div>
  );
};

export default Filter;
