import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./MovieCard.css";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Card = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 280px;
  margin: 0 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(0, 0, 0, 0.5);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #fff;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.025);
  }
`;

const CardTitleRow = styled.div`
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 13px;
`;

const CardTitle = styled.h4`
  width: 100%;
  margin: 0;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.01);
  }
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 20px;
`;

//This component will represent each movie or TV series being displayed in our app. When a user clicks on one of these MovieCards, the route will be updated in the container. The container will see the new URL and determine that the movie micro frontend should be mounted and rendered. The movie micro frontend's routing logic will then extract the movie/series ID from the URL and render the correct information.

const MovieCard = ({ movie }) => (
  <Card>
    <StyledLink to={`/movie/${movie.imdbID}`}>
      <CardTitleRow>
        <CardTitle>{movie.Title}</CardTitle>
      </CardTitleRow>
      <div style={{ height: "97%", fontSize: "15px" }} id="poster-wrapper">
        <Img src={movie.Poster} alt={`${movie.Title} art`} />
        {movie.Type === "movie" ? (
          <i className="fas fa-film abs" />
        ) : (
          <i className="fas fa-tv abs" />
        )}
        {/* <Description>{movie.description}</Description> */}
      </div>
    </StyledLink>
  </Card>
);

export default MovieCard;
