import { Switch, Route } from 'react-router-dom'
import React from 'react';
import MoviePage from "./MoviePage";

import MovieList from '../containers/MovieList'

const Body = () => (
    <main>
        <Switch>
          <Route exact path="/list" component={MovieList}/>
            <Route exact path='/movie/:movieId' component={MoviePage}/>
        </Switch>
    </main>
);

export default Body;