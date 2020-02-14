import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import styled from "styled-components";
import Loading from "./Components/Loading/Loading";
import Filter from "./Components/Filter/Filter";
import MovieList from "./Components/MovieList/MovieList";

const MainColumn = styled.div`
  margin: 0 auto;
  // background-color: black;
`;

// const defaultFilters = {
//   nameFilter: ""
// };

const defaultHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      error: false,
      nameFilter: "",
      searchType: "movie",
      lastSearch: "star wars"
    };
  }

  componentDidMount() {
    const host = process.env.REACT_APP_CONTENT_HOST;
    fetch(`http://www.omdbapi.com/?apikey=81fbe921&type=movie&s=star+wars`)
      .then(result => result.json())
      .then(movies => {
        console.log(movies);
        this.setState({
          movies: movies.Search,
          lastSearch: "star wars",
          loading: false
        });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { nameFilter, searchType } = this.state;
    if (
      prevState.nameFilter !== nameFilter &&
      this.state.nameFilter !== "" &&
      this.state.nameFilter.length > 1
    ) {
      fetch(
        `http://www.omdbapi.com/?apikey=81fbe921&type=${searchType}&s=${this.state.nameFilter}`
      )
        .then(result => result.json())
        .then(movies => {
          this.setState({
            movies: movies.Search,
            lastSearch: nameFilter,
            loading: false
          });
        })
        .catch(() => {
          this.setState({ loading: false, error: true });
        });
    } else if (prevState.searchType !== searchType) {
      fetch(
        `http://www.omdbapi.com/?apikey=81fbe921&type=${searchType}&s=${this.state.lastSearch}`
      )
        .then(result => result.json())
        .then(movies => {
          this.setState({
            movies: movies.Search,
            loading: false
          });
        })
        .catch(() => {
          this.setState({ loading: false, error: true });
        });
    }
  }

  setNameFilter = value => this.setState({ nameFilter: value });

  setSearchType = searchType => this.setState({ searchType });

  resetAllFilters = () => this.setState({ nameFilter: "" });

  render() {
    const { movies, nameFilter, loading, error } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <MainColumn>
          Sorry, but the movie list is unavailable right now
        </MainColumn>
      );
    }
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
          <MovieList movies={movies} nameFilter={nameFilter} />
        </MainColumn>
      </Router>
    );
  }
}

export default App;
