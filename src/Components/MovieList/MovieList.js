import React from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard/MovieCard";

const CardContainer = styled.div`
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  // background-color: #99aab5;
  // background-color: black;
  // background-image: url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
  // background-size: 100% 100%;
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
