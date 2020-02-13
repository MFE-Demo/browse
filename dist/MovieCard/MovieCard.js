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
  box-shadow: 0 0 0 2px rgba(0,0,0,.3), 0 2px 3px rgba(0,0,0,.5);
  padding: 10px;
  margin-bottom: 10px;
  background-color: #99AAB5;
  color: #fff;
  border-radius: 5px;
`;
const CardTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const CardTitle = styled.h4`
  width: 100%;
  margin: 0;
  text-align: center;
`;
const Img = styled.img`
  width: 100%;
  height: 95%;
  border-radius: 5px;
`;
const Description = styled.p`
  margin-top: 0;
  font-size: 20px;
`;

const MovieCard = ({
  movie
}) => React.createElement(Card, null, React.createElement(StyledLink, {
  to: `/movie/${movie.imdbID}`
}, React.createElement(CardTitleRow, null, React.createElement(CardTitle, null, movie.Title)), React.createElement(Img, {
  src: movie.Poster,
  alt: `${movie.Title} art`
})));

export default MovieCard;