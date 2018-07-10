import { Switch } from 'react-router-dom'
import React from 'react';
import MoviePage from "./MoviePage";
import Route from "react-router-dom/es/Route";

const Body = () => (
    <main>
        <Switch>
            {<Route path='/movie/:movieId' component={MoviePage}/>}
        </Switch>
    </main>
);

export default Body;