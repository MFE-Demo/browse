import React from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard/MovieCard";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const RestaurantList = ({ movies, nameFilter }) => {
  return (
    <CardContainer>
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} title={movie.title} year={movie.year} art={movie.poster} />
      ))}
    </CardContainer>
  );
};

export default RestaurantList;
