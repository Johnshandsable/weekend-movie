import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import { Description } from '@material-ui/icons';

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();

  /* Styles */
  const useStyles = makeStyles((theme) => ({
    root: {
      border: '3px solid black',
      boxShadow: '0 0 10px',
      marginBottom: 20,
      marginTop: 20,
      marginLeft: 50,
      maxWidth: 185,
      maxHeight: 400,
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  const classes = useStyles();

  /*
    <IconButton aria-label="full description">
          <DescriptionIcon />
        </IconButton>
  */
  const handleImageClick = ({ movie }) => {
    dispatch({
      type: 'FETCH_MOVIE',
      payload: movie,
    });
    // ${movie.id}
    // history.push(`/details/`);
  };

  return (
    <Grid item xs={4}>
      <Paper elevation={3} className={classes.root}>
        <Typography variant="body1">{movie.title}</Typography>
        <img
          onClick={() => handleImageClick({ movie })}
          src={movie.poster}
          alt={movie.title}
        />
      </Paper>
    </Grid>
  );
}

export default MovieItem;
