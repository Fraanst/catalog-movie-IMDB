import React, { useEffect, useState } from "react";
// import { Label1 } from "baseui/typography";
// import { StatefulInput } from "baseui/input";
// import { Button } from "baseui/button";

import { Header, Search } from "../common/styled";
import MovieDetails from "./MovieDetails";

const URL_API = "http://www.omdbapi.com/?i=tt3896198&apikey=267b3e23";
const URL_API_MOVIES = "&plot=full&type=movie&y=2019";
//const URL_API_SERIES = "&plot=short&type=series&y=2019";

const Movie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(URL_API + URL_API_MOVIES);
        const movie = await data.json();

        console.log("movie", movie);
        setMovies(movie);
      } catch (error) {
        setError(error);
      }
    };
    setIsLoading(false);
    !movies && fetchMovies();
  }, [movies]);

  const handleSearchChange = event => {
    setSearch(event.target.value);
    searchMovies(search);
  };

  const searchMovies = async title => {
    console.log("title", title);
    setIsLoading(false);
    try {
      const result = await fetch(URL_API + `&t=${title}`);
      const movie = await result.json();
      console.log("movie", movie);
      setMovies(movie);
    } catch (error) {
      setError(error);
    }
  };

  if (isLoading) {
    return "loading";
  }

  if (error) {
    return "error";
  }
  if (!movies) {
    return "Nada encontrado";
  } else {
    return (
      <>
        <Header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Buscar Filme</a>
              </li>
              <li>
                <a href="/">Buscar Seriado</a>
              </li>
            </ul>
          </nav>
        </Header>

        <Search
          placeholder="Busca filme por Título"
          onChange={handleSearchChange}
        ></Search>
        <MovieDetails movie={movies} />
      </>
    );
  }
};

export default Movie;
