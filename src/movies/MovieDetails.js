import React from "react";
import { Section, Imagem, Block } from "../common/styled";

const MovieDetails = ({
  movie: {
    Title,
    Actors,
    imdbRating,
    Production,
    Country,
    Runtime,
    Released,
    Genre,
    Director,
    Writer,
    Plot,
    Poster
  }
}) => {
  return (
    <Section>
      <Block>
        <Imagem>
          <img src={Poster} alt="Poster do Filme" />
        </Imagem>
      </Block>
      <p>{Title}</p>
      <Block>
        <ul>
          <li>Pontuação IMDB: {imdbRating}</li>
          <li>Sinopse: {Plot} </li>
          <li>Gênero: {Genre} </li>
          <li>Atores: {Actors} </li>
          <li>Roterista: {Writer} </li>
          <li>Diretor: {Director} </li>
          <li>Tempo: {Runtime} </li>
          <li>Lançamento: {Released} </li>
          <li>País: {Country} </li>
          <li>Produção: {Production} </li>
        </ul>
      </Block>
    </Section>
  );
};

export default MovieDetails;
