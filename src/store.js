import {observable, action} from 'mobx';

import {createHeader} from "./actions/ApiCaller";
import {REMOTE_URL} from './constants';
import {ACCESS_TOKEN} from "./actions/ApiCaller";

class MovieStore {
    @observable movies = [];
    @observable page = 0;
    @observable totalPages = 0;
    @observable state = "done";
    @observable authenticated = localStorage.getItem(ACCESS_TOKEN) != null;
    @observable movie = "";
    @observable token = null;
    @observable averageRating = "";
    @observable movieId = "";
    @observable predictedRating = "";
    @observable topMovies = [];

    constructor() {
        if (localStorage.getItem(ACCESS_TOKEN)) {
            this.login(localStorage.getItem(ACCESS_TOKEN));
        }
    }

    @action
    fetchMovies() {
        this.movies = [];
        this.state = "pending";
        fetch(`${REMOTE_URL}/movies?page=${this.page}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(json => {
                this.totalPages = json.totalPages - 1;
                this.movies = json.content;
                this.state = "done";
            });
    }

    @action
    fetchTopMovies() {
        this.topMovies = [];
        this.state = "pending";
        fetch(`${REMOTE_URL}/movies/top100`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(json => {
                this.topMovies = json;
                this.state = "done";
            });
    }

    @action
    fetchSearch(titlePart) {
        this.movies = [];
        this.state = "pending";
        fetch(`${REMOTE_URL}/movies/title/${titlePart}?page=${this.page}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
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
        this.movieId = movieId;
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


    @action
    login(token) {
        this.authenticated = true;
        this.token = token;
    }

    @action
    logout() {
        fetch(`${REMOTE_URL}/logout`, {
            headers: createHeader()
        });
        localStorage.clear();
        window.location.reload();
    }

    @action
    getAverageRating() {
        this.state = "pending";
        this.averageRating = "";
        fetch(`${REMOTE_URL}/ratings/averageRating/${this.movieId}`, {
            headers: createHeader()
        })
            .then(response => response.json())
            .then(json => {
                this.averageRating = json;
                this.state = "done";
            });
    }


    @action
    getPredictedRating() {
        this.state = "pending";
        this.predictedRating = "";
        fetch(`${REMOTE_URL}/ratings/predictedRating/${this.movieId}`, {
            headers: createHeader()
        })
            .then(response => response.json())
            .then(json => {
                this.predictedRating = json;
                this.state = "done";
            });
    }
}

export default MovieStore;