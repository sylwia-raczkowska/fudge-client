import React  from 'react';

const MoviesRow = ({movies}) => (
  <section>
      {movies.map((movie) => (
          <a href="#">
              <h5>{movie.title}</h5>
          </a>
          )
      )}
  </section>
);

export default MoviesRow;