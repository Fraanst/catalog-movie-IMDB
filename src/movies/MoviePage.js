import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

import MovieSearch from "./MovieSearch";
import MovieDetails from "./MovieDetails";
import { Title } from './movieStyled'

const PATH = "/";
const URL_API = "http://www.omdbapi.com/?i=tt3896198&apikey=9fcd51e3&plot=full&type=movie";



const MoviePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  const handleSearchChange = event => {
    const title = event.target.value;
    if (!title) {
      setMovie({});
      setError(null);
    } else {
      searchMovies(title);
    }
  };

  const searchMovies = async (title) => {
    setIsLoading(false);
    try {
      const result = await fetch(URL_API + `&t=${title}`);
      const movie = await result.json();
      console.log("movie", movie);
      if (movie.Response === "False") {
        setError(movie.Error);
        setMovie({});
      } else {
        setMovie(movie);
      }
    } catch (error) {
      setError(error);
    }
  };


  return (
    <Grid container>
      <Grid item xs={12}>
        <MovieSearch handleSearchChange={handleSearchChange} />
        {isLoading && <LinearProgress />}
      </Grid>
      <Grid item xs={12}>
        <Title>{movie.Title}</Title>
        {error && <Title>Filme não encontrado ☹</Title>}
      </Grid>
      {movie.Title &&
        <Grid container item xs={12} direction="row" spacing={6}>
          <MovieDetails movie={movie} />
        </Grid>
      }
    </Grid>
  );
};

export { PATH };
export default MoviePage;
