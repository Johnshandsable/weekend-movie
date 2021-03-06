import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleImageClick = ({ movie }) => {
    dispatch({
      type: 'FETCH_MOVIE',
      payload: movie,
    });
    history.push('/details');
  };
  return (
    <Grid item xs={3}>
      <Typography variant="h6">{movie.title}</Typography>
      <img
        onClick={() => handleImageClick({ movie })}
        src={movie.poster}
        alt={movie.title}
      />
    </Grid>
  );
}

export default MovieItem;
