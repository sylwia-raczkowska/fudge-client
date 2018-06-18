import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import MoviesRow from "../components/MoviesRow";
import Pager from "./Pager";

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
        <MoviesRow movies={movies}/>
        <Pager/>
      </div>
    );
  }

}


export default MovieList;