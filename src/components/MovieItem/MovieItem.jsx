import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

function MovieItem({ movie }) {
  const useStyles = makeStyles({
    root: {
      marginTop: 20,
    },
  });

  const classes = useStyles();

  return (
    <div className="movie">
      <img
        onClick={() => handleImageClick({ movie })}
        src={movie.poster}
        alt={movie.title}
      />
      <div className="movie-info">
        <Typography
          style={{ fontFamily: 'Spicy Rice', color: '#dfe6e9' }}
          variant="h6"
        >
          {movie.title}
        </Typography>
      </div>

      <div className="movie-overview">
        <Typography
          className={classes.root}
          variant="h6"
          style={{ textAlign: 'left' }}
        >
          Overview:
        </Typography>
        <Typography
          className={classes.root}
          variant="body1"
          style={{ textAlign: 'left' }}
        >
          {movie.description}
        </Typography>
      </div>
    </div>
  );
}

export default MovieItem;
