import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env;

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://www.omdbapi.com/?apikey=c545be60&s=matrix ")
  //     .then((response) => response.json())
  //     .then((data) => setMovies(data.Search));
  // }, []);
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((data) => {
        setLoading(false);
        setMovies(data.Search);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};
