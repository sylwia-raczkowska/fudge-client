import { Switch, Route } from 'react-router-dom'
import React from 'react';
import MoviePage from "./MoviePage";

import MovieList from '../containers/MovieList'

const Body = () => (
    <main>
        <Switch>
          <Route exact path="/list" component={MovieList}/>
            {/*<Route path='/register' component={Register}/>*/}
            {<Route path='/movie/:movieId' component={MoviePage}/>}
          <Route exact path="/list" component={MovieList}/>
        </Switch>
    </main>
);

export default Body;