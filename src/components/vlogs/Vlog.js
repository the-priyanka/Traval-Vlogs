import React, { useEffect, useState } from "react";
import "./vlog.css";
import SearchForm from "./SearchForm";
import { useVlogContext } from "../../context/vlogContext";
import Categories from "./Categories";
import Videos from "./Videos";

const Vlog = () => {
  const { isLoading, vlogs, allCategories } = useVlogContext();
  const [menuItems, setMenuItems] = useState(vlogs);
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setMenuItems(vlogs);
    setCategories(allCategories);
    setActiveCategory("all");
  }, [vlogs, allCategories]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(vlogs);
      return;
    }
    const newItems = vlogs.filter(
      (item) => item.category === category
    );
    setMenuItems(newItems);
  };

  return (
    <>
      <h1 className="vlog-head">my vlog</h1>
      <div className="vlog">
        <div className="video-container">
          <SearchForm />
          <Categories
            filterItems={filterItems}
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          {isLoading ? (
            <div className="loading"></div>
          ) : (
            <Videos items={menuItems} />
          )}
          <div className="more-video">
            <a
              href="https://www.youtube.com/c/NJVlogs001"
              target="_blank"
              rel="noreferrer"
            >
              for more videos
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vlog;
