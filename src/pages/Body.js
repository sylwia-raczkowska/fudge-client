import { Switch, Route } from 'react-router-dom'
import React from 'react';
import MoviePage from "./MoviePage";

import MovieList from '../containers/MovieList'
import TopList from "../containers/TopList";

const Body = () => (
    <main>
        <Switch>
          <Route exact path="/" component={MovieList}/>
            <Route exact path="/top100" component={TopList}/>
          <Route exact path='/movie/:movieId' component={MoviePage}/>
        </Switch>
    </main>
);

export default Body;