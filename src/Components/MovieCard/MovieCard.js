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
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 20px;
`;

const MovieCard = ({ movie }) => (
  <Card>
    <StyledLink to={`/movie/${movie.imdbID}`}>
      <CardTitleRow>
        <CardTitle>{movie.Title}</CardTitle>
      </CardTitleRow>
      <div style={{ height: "97%" }}>
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
