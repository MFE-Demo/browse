import axios from "axios";
import { GET_MOVIES, GET_SERIES, SET_LAST } from "../actionTypes";

const initialState = {
  movies: [],
  series: [],
  lastSearch: ""
};

export const getMovies = search => {
  let flix = {};
  let movies = axios
    .get(`http://www.omdbapi.com/?apikey=81fbe921&type=movie&s=${search}`)
    .then(res => res.data);
  return {
    type: GET_MOVIES,
    payload: movies
  };
};

export const getSeries = search => {
  let series = axios
    .get(`http://www.omdbapi.com/?apikey=81fbe921&type=series&s=${search}`)
    .then(res => res.data);
  setLastSearch(search);
  return {
    type: GET_SERIES,
    payload: series
  };
};

const setLastSearch = search => {
  return {
    type: SET_LAST,
    payload: search
  };
};

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case GET_MOVIES + "_FULFILLED":
      console.log("hihtitht", payload);

      return {
        ...state,
        movies: payload.Search
      };
    case GET_SERIES + "_FULFILLED":
      console.log("hitters", payload);
      return {
        ...state,
        series: payload.Search
      };
    case SET_LAST:
      return {
        ...state,
        lastSearch: payload
      };
    default:
      return state;
  }
}
