import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

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
