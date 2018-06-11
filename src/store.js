import { observable, action } from 'mobx';

import { REMOTE_URL } from './constants';

class MovieStore {
  @observable movies = [];
  @observable page = 0;
  @observable state = "done";

  @action
  fetchMovies() {
    this.movies = [];
    this.state = "pending";
    fetch(`${REMOTE_URL}/movies?page=${this.page}`, {
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    })
      .then(response => response.json())
      .then(json => {
        this.movies = json.content;
        this.state = "done";
      });
  }

  @action
  changePage(page) {
      this.page = page;
  }

}

export default MovieStore;