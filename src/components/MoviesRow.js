import React, {Component} from 'react';
import {GridList, GridTile} from "material-ui";
import {Link} from 'react-router-dom'
import styled from "styled-components";

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        overflowY: 'auto',
    },
    topList: {
        width: '60%',
        overflowY: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};

const StyledH = styled.h1`
    color: white;
    margin-right: 5px;
`;

export default class MoviesRow extends Component {

    render() {
        const movies = this.props.movies;
        const top = this.props.top;

        return (
            <section style={styles.root}>
                <GridList style={top ? styles.topList : styles.gridList}>
                    {movies.map((movie, index) => (
                            <Link to={`/movie/${movie.movieId}`}>

                                <GridTile
                                    style={styles.titleStyle}
                                    key={movie.movieId}
                                    title={movie.title}
                                    titleStyle={styles.titleStyle}
                                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                    actionIcon={top ? <StyledH>{++index}</StyledH> : null}
                                >
                                    <img src={movie.details && movie.details.Poster}/>
                                </GridTile>
                            </Link>
                        )
                    )}
                </GridList>
            </section>
        )
    }
}
