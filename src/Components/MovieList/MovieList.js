import React from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard/MovieCard";

const CardContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  // background-color: #99aab5;
  background-color: black;
`;

const MovieList = ({ movies, nameFilter }) => {
  console.log(movies);
  return (
    <CardContainer id="card-wrapper">
      {movies && movies.length > 1 ? (
        movies.map(movie => {
          if (movie.Poster !== "N/A") {
            return <MovieCard key={movie.imdbID} movie={movie} />;
          }
        })
      ) : (
        <p>Nothing to show..</p>
      )}
    </CardContainer>
  );
};

export default MovieList;
