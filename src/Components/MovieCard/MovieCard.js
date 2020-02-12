import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Card = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 350px;
  margin: 0 5px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
  padding: 10px;
  margin-bottom: 10px;
`;

const CardTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  margin: 0;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  height: 65vh;
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
      <Img src={movie.Poster} alt={`${movie.Title} art`} />
      {/* <Description>{movie.description}</Description> */}
    </StyledLink>
  </Card>
);

export default MovieCard;