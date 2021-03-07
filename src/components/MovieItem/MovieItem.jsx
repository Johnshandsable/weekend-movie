import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import { Description } from '@material-ui/icons';

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();

  /* Styles */
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 200,
      height: 300,
    },
    media: {
      // height: 0,
      paddingTop: '150%',
      // paddingTop: '56.25%', // 16:9
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
    history.push('/details');
  };

  return (
    <Grid item xs={3}>
      <Card className={classes.root}>
        <CardHeader title={movie.title} />
        <CardMedia
          className={classes.media}
          image={movie.poster}
          title={movie.title}
        />

        {/* <img
        onClick={() => handleImageClick({ movie })}
        src={movie.poster}
        alt={movie.title}
      /> */}
      </Card>
    </Grid>
  );
}

export default MovieItem;
