import React  from 'react';
import {GridList, GridTile} from "material-ui";
import { Link } from 'react-router-dom'

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
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const MoviesRow = ({movies}) => (
  <section style={styles.root}>
    <GridList style={styles.gridList}>
      {movies.map((movie) => (
          <Link to={`/movie/${movie.movieId}`}>
            <GridTile
              style={styles.titleStyle}
              key={movie.movieId}
              title={movie.title}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={movie.details.Poster}/>
            </GridTile>
          </Link>
        )
      )}
    </GridList>
  </section>
);

export default MoviesRow;