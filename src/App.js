import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import { getMovies, getSeries } from "./Redux/Reducers/flixReducer";
import styled from "styled-components";
import Loading from "./Components/Loading/Loading";
import Filter from "./Components/Filter/Filter";
import MovieList from "./Components/MovieList/MovieList";
import "./App.css";

const MainColumn = styled.div`
  width: 100%;
  margin: 0 auto;
  // background-color: black;
`;
const defaultHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      series: [],
      loading: true,
      error: false,
      nameFilter: "",
      searchType: "all",
      lastSearch: "star wars"
    };
  }

  async componentDidMount() {
    const { nameFilter } = this.state;
    const { movies, series } = this.props;
    if (movies && series && movies.length < 1 && series.length < 1) {
      await this.props.getMovies("star wars");
      await this.props.getSeries("star wars");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { nameFilter, searchType, lastSearch } = this.state;
    const { movies, series } = this.props;

    if (
      prevState.nameFilter !== nameFilter &&
      this.state.nameFilter !== "" &&
      this.state.nameFilter.length > 2
    ) {
      this.props.getMovies(nameFilter);
      this.props.getSeries(nameFilter);
    }
  }

  setNameFilter = value => this.setState({ nameFilter: value });

  setSearchType = searchType => this.setState({ searchType });

  resetAllFilters = () => this.setState({ nameFilter: "" });

  render() {
    const { searchType, nameFilter, loading, error } = this.state;

    const { movies, series } = this.props;

    if ((movies, series)) console.log(movies, series);

    if (loading && movies.length > 1 && series.length > 1) {
      this.setState({ loading: false });
    }

    if (loading) {
      return (
        <MainColumn>
          <Loading />
        </MainColumn>
      );
    }

    if (error) {
      return (
        <MainColumn>
          Sorry, but the movie list is unavailable right now
        </MainColumn>
      );
    } else
      return (
        <Router history={this.props.history || defaultHistory}>
          <MainColumn>
            <Filter
              name={nameFilter}
              setNameFilter={this.setNameFilter}
              resetAll={this.resetAllFilters}
              searchType={this.state.searchType}
              setSearchType={this.setSearchType}
            />
            <div className="list-wrapper">
              {movies && movies.length > 1 ? (
                <MovieList
                  movies={this.props.movies}
                  series={this.props.series}
                  searchType={searchType}
                  nameFilter={nameFilter}
                />
              ) : (
                <Loading />
              )}
            </div>
          </MainColumn>
        </Router>
      );
  }
}

function mapStateToProps(state) {
  return state.flix;
}

export default connect(mapStateToProps, { getMovies, getSeries })(App);
