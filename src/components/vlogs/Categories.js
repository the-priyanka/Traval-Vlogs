import React from "react";

const Categories = ({
  categories,
  filterItems,
  setActiveCategory,
  activeCategory,
}) => {
  const handleLinks = (category) => {
    filterItems(category);
    setActiveCategory(category);
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={
              activeCategory === `${category}`
                ? "filter-btn active"
                : "filter-btn"
            }
            key={index}
            onClick={() => handleLinks(category)}
          >
            {capitalizeFirstLetter(category)}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
