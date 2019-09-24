import React from "react";
import { Grid, Card } from '@material-ui/core';

import { RatingItem, Span, Image } from './movieStyled'

const MovieDetails = ({
  movie: {
    Actors,
    Country,
    Runtime,
    Released,
    Genre,
    Director,
    Writer,
    Plot,
    Poster,
    Ratings
  }
}) => {
  return (
    <>
      <Grid item xs={12} sm={4}>
        <Image src={Poster} alt="Poster do Filme" />
      </Grid>
      <Grid item container xs={12} sm={8} direction='column' justify='space-between'>
        <Span>{Plot} </Span>
        <div>
          <Span>Diretor: {Director} </Span>
          <Span>Gênero: {Genre} </Span>
          <Span>Roterista: {Writer} </Span>
          <Span>Atores: {Actors} </Span>
          <Span>Tempo: {Runtime} </Span>
          <Span>Lançamento: {Released} </Span>
          <Span>País: {Country} </Span>
        </div>
        <Grid container justify='center'>
          {Ratings && Ratings.map(rating =>
            <Grid key={rating.Source} item xs={4}>
              <Card>
                <RatingItem>
                  <Span>{rating.Source}</Span>
                  <Span>{rating.Value}</Span>
                </RatingItem>
              </Card>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default MovieDetails;
