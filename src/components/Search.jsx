import React, { useState } from "react";

export const Search = (props) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const handleKey = (event) => {
    if (event.key === "Enter") {
      props.searchMovies(search);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    props.searchMovies(search, event.target.dataset.type);
  };

  return (
    <div>
      <div className="row">
        <div className="col s12"></div>
        <div className="inpit-field inline">
          <input
            id="email_inline"
            type="search"
            placeholder="search"
            className="validate"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => handleKey(e)}
          />
          <button onClick={(e) => props.searchMovies(search, type)}>
            Search movie
          </button>
        </div>
        <div>
          <input
            className="with-gap"
            name="group3"
            type="radio"
            data-type="all"
            onChange={(e) => handleFilter(e)}
            checked={type === "all"}
          />
          <span>All</span>
          <input
            className="with-gap"
            name="group3"
            type="radio"
            data-type="movie"
            onChange={(e) => handleFilter(e)}
            checked={type === "movie"}
          />
          <span>Movies</span>
          <input
            className="with-gap"
            name="group3"
            type="radio"
            data-type="series"
            onChange={(e) => handleFilter(e)}
            checked={type === "series"}
          />
          <span>Series</span>
        </div>
      </div>
    </div>
  );
};
