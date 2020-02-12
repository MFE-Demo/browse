import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import styled from "styled-components";
import Loading from "./Components/Loading/Loading";
import Filter from "./Components/Filter/Filter";
import MovieList from "./Components/MovieList/MovieList";

const MainColumn = styled.div`
  margin: 0 auto;
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
      nameFIlter: "nah"
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
          nameFilter: "",
          loading: false
        });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { nameFilter } = this.state;
    if (
      prevState.nameFilter !== nameFilter &&
      this.state.nameFilter !== "" &&
      this.state.nameFilter.length > 2
    ) {
      fetch(
        `http://www.omdbapi.com/?apikey=81fbe921&type=movie&s=${this.state.nameFilter}`
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
          />
          <MovieList movies={movies} nameFilter={nameFilter} />
        </MainColumn>
      </Router>
    );
  }
}

export default App;
