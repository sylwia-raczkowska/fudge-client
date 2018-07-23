import React, {Component} from "react";
import BackComponent from "../components/BackComponent";
import {Card, CardMedia, CardTitle} from "material-ui";
import {Rating} from 'material-ui-rating'
import styled from 'styled-components';
import {observer, inject} from 'mobx-react';
import MovieDetails from "../components/MovieDetails";
import RecommendationRate from "../components/RecommendationRate";
import {rate} from "../actions/ApiCaller";


const cardStyles = {
    margin: "20px 100px 20px 100px",
    padding: 40,
    height: "800px",
    position: "relative",
    width: "90%"
};

const StyledDiv = styled.div`
    position: absolute;
    top: 50;
    left: 50;
    text-align:center;
`;

const StyledImg = styled.img`
    max-height:600px;
    max-width:500px;
    height:auto;
    width:auto;
`;

const mediaStyles = {
    width: "500px"

};

const textStyles = {
    textAlign: "center"
};

const ratingStyles = {
    bottom: 400
};

const MAX_RATE = 10;

@inject("movieStore")

@observer
export default class MoviePage extends Component {


    constructor(props) {
        super(props);
        props.movieStore.getMovie(1);

        this.state = {
            rate: null
        }
    }

    rate(value) {
        const ratingRequest = {
            movieId: 1,
            rating: value/2
        };
        rate(ratingRequest);
        this.setState({rate: value});
    }

    render() {
        const {movie} = this.props.movieStore;
        if (this.state.rate === null) {
            this.state.rate = movie.userRate ? movie.userRate*2 :  null;
        }
        return (
            <div className="container">
                <BackComponent></BackComponent>
                <Card style={cardStyles}>
                    <StyledDiv>
                        <CardMedia style={mediaStyles}
                                   overlay={<CardTitle title={movie.title} subtitle={movie.genres}
                                                       style={textStyles}/>}>
                            <StyledImg src={movie && movie.details && movie.details.Poster} alt=""/>

                        </CardMedia>
                        {this.state.rate ? <h1>{this.state.rate} / {MAX_RATE}</h1> : <h1>Rate this movie!</h1>}
                        <Rating style={ratingStyles} value={this.state.rate} max={MAX_RATE} onChange={v => this.rate(v)}/>

                    </StyledDiv>
                    <RecommendationRate/>
                    <MovieDetails details={movie && movie.details}/>

                </Card>
            </div>
        );

    }


}

