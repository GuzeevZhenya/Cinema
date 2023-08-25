import React from "react";
import { Movie } from "./Movie";

export const Movies = (props) => {
  const { movies } = props;
  return (
    <div className="movies-container">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Nothing</h4>
      )}
    </div>
  );
};
