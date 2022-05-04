import React from "react";
import { BsSearch } from "react-icons/bs";
import { useVlogContext } from "../../context/vlogContext";
import Not_found from "../../assets/not_found.png";

const SearchForm = () => {
  const { error, query, setQuery } = useVlogContext();
  return (
    <>
      <form
        className="search-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <button className="search-btn">
          <BsSearch />
        </button>
        <input
          name="search"
          id="search"
          placeholder="search video...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </form>
      {error.show === true && (
        <div className="error">
          <img src={Not_found} alt="not found" />
          <h3>{error.msg}</h3>
        </div>
      )}
    </>
  );
};

export default SearchForm;
