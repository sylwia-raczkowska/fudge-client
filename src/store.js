import {action, observable} from "mobx";

import {REMOTE_URL} from "./constants";
import {createHeader} from "./actions/ApiCaller";

class MovieStore {
    @observable movies = [];
    @observable page = 0;
    @observable totalPages = 0;
    @observable state = "done";
    @observable movie = "";

    @action
    fetchMovies() {
        this.movies = [];
        this.state = "pending";
        fetch(`${REMOTE_URL}/movies?page=${this.page}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => response.json())
            .then(json => {
                this.totalPages = json.totalPages - 1;
                this.movies = json.content;
                this.state = "done";
            });
    }

    @action
    changePage(page) {
        this.page = page;
        this.fetchMovies();
    }

    @action
    getMovie(movieId) {
        this.movie = "";
        this.state = "pending";
        fetch(`${REMOTE_URL}/movies/${movieId}`, {
            headers: createHeader()
        })
            .then(response => response.json())
            .then(json => {
                this.movie = json;
                this.state = "done";
            });
    }


}

export default MovieStore;