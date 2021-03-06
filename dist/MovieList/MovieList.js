import React from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard/MovieCard";
const CardContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const MovieList = ({
  movies,
  nameFilter
}) => {
  console.log(movies);
  return React.createElement(CardContainer, null, movies && movies.length > 1 ? movies.map(movie => {
    if (movie.Poster !== "N/A") {
      return React.createElement(MovieCard, {
        key: movie.imdbID,
        movie: movie
      });
    }
  }) : React.createElement("p", null, "Nothing to show.."));
};

export default MovieList;