import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import MoviesRow from "../components/MoviesRow";
import Pager from "./Pager";
import SearchBar from "./SearchBar";

@inject("movieStore")
@observer
class MovieList extends Component {

  constructor(props) {
    super(props);
    props.movieStore.fetchMovies();
  }

  render() {
    const { movies } = this.props.movieStore;

    return (
      <div>
        <SearchBar/>
        <MoviesRow movies={movies}/>
        <Pager/>
      </div>
    );
  }

}


export default MovieList;