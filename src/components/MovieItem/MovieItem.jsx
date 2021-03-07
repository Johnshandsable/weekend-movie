import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();

  console.table(movie);

  const handleImageClick = ({ movie }) => {
    dispatch({
      type: 'FETCH_MOVIE',
      payload: movie,
    });
    history.push(`/details/`);
  };

  return (
    <div className="movie">
      <img
        onClick={() => handleImageClick({ movie })}
        src={movie.poster}
        alt={movie.title}
      />
      <div className="movie-info">
        <Typography variant="h6">{movie.title}</Typography>
      </div>

      <div className="movie-overview">
        <Typography variant="subtitle1">Overview</Typography>
        <Typography variant="body1">{movie.description}</Typography>
      </div>
    </div>
  );
}

export default MovieItem;
