import React, { useState } from "react";

export const Search = (props) => {
  const [search, setSearch] = useState();
  const [type, setType] = useState("all");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      props.searchMovies(search);
    }
  };

  const handelerButton = (movie) => {
    setSearch(movie);
    props.searchMovies(search);
  };

  const handleFilter = (event) => {
    setType(event.currentTarget.dataset.type);
    props.searchMovies(search);
  };

  return (
    <div>
      <div className="row">
        <div className="col s12"></div>
        <div className="inpit-field inline">
          <input
            placeholder="search"
            type="search"
            className="validate"
            onChange={(e) => setSearch(e.currentTarget.value)}
            onKeyDown={handleKey}
          />
          <button onClick={(e) => handelerButton(e.currentTarget.value)}>
            Search movie
          </button>
        </div>
        <div>
          <input
            name="all"
            type="radio"
            value={type}
            data-type="all"
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span>All</span>
          <input
            name="movies"
            type="radio"
            value={type}
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movies</span>
          <input
            name="series"
            type="radio"
            value={type}
            data-type="series"
            onChange={handleFilter}
            checked={type === "series"}
          />
          <span>Series</span>
        </div>
      </div>
    </div>
  );
};
