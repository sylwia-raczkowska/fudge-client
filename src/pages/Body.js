import { Switch, Route } from 'react-router-dom'
import React from 'react';

import MovieList from '../containers/MovieList'

const Body = () => (
    <main>
        <Switch>
          <Route exact path="/list" component={MovieList}/>
            {/*<Route path='/register' component={Register}/>*/}
        </Switch>
    </main>
);

export default Body;