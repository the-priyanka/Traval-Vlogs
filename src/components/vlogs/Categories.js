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
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
