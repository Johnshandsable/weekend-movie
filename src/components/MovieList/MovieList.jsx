import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieItem from '../MovieItem/MovieItem';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <div className="movie-container">
      {movies.map((movie, i) => {
        return <MovieItem key={i} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
