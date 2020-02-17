import React, { useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard/MovieCard";
const mediumScreen = `@media (min-width: 1080px)`;

const CardContainer = styled.div`
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  // background-color: #99aab5;
  // background-color: black;
  ${mediumScreen} {
    max-width: 80%;
  }
`;

const MovieList = ({ movies, series, searchType, nameFilter }) => {
  const [allList, setAll] = React.useState([]);
  console.log(movies);
  console.log(series, "Series");
  useEffect(() => {
    if (movies && series && movies.length > 1 && series.length > 1) {
      setAll([...movies, ...series]);
      console.log("hi yo", allList);
    }
  }, [series, movies]);

  useEffect(() => {}, [movies]);
  return (
    <CardContainer id="card-wrapper">
      {allList && allList.length > 1 && searchType === "all" ? (
        allList.map(movie => {
          if (movie.Poster !== "N/A") {
            return <MovieCard key={movie.imdbID} movie={movie} />;
          }
        })
      ) : movies && movies.length > 1 && searchType === "movie" ? (
        movies.map(movie => {
          if (movie.Poster !== "N/A") {
            return <MovieCard key={movie.imdbID} movie={movie} />;
          }
        })
      ) : series && series.length > 1 && searchType === "series" ? (
        series.map(series => {
          if (series.Poster !== "N/A") {
            return <MovieCard key={series.imdbID} movie={series} />;
          }
        })
      ) : (
        <p>Nothing to show..</p>
      )}
    </CardContainer>
  );
};

export default MovieList;
