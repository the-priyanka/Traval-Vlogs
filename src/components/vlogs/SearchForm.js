import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchForm = () => {
  return (
    <form className="search-form">
      <button className="search-btn">
        <BsSearch />
      </button>
      <textarea
        name="search"
        id="search"
        placeholder="search video...."
      ></textarea>
    </form>
  );
};

export default SearchForm;
