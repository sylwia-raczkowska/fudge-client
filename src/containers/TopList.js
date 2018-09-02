import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import MoviesRow from "../components/MoviesRow";
import BackComponent from "../components/BackComponent";
import styled from "styled-components";

const StyledH = styled.h1`
    color: rgb(0, 188, 212);
`;

@inject("movieStore")
@observer
class TopList extends Component {

    constructor(props) {
        super(props);
        props.movieStore.fetchTopMovies();
    }

    render() {
        let movies = this.props.movieStore.topMovies;
        return (
           <div>
                <BackComponent></BackComponent>
            <div style={{textAlign: "center"}}>
                <StyledH>Top 100</StyledH>
                <MoviesRow movies={movies} top={true}/>

            </div>
           </div>
        );
    }

}


export default TopList;