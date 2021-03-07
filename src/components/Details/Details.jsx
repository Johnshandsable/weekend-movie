import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function Details() {
  const history = useHistory();
  const [movie, setMovie] = useState([]);
  const movieFromStore = useSelector((store) => store.singleMovie);
  useEffect(() => {
    setMovie(movieFromStore || { title: '', poster: '' });
  }, []);

  // HANDLES THE USER GOING TO DETAILS PAGE WITHOUT CLICKING
  // if (movie.any === undefined) {
  //   history.push('/');
  // }

  const useStyles = makeStyles((theme) => ({
    spacingTop: {
      marginTop: 100,
    },
    descriptText: {
      textAlign: 'left',
      lineHeight: '1.5rem',
      marginLeft: 20,
      marginRight: 20,
    },
  }));

  const classes = useStyles();

  const handleClick = () => {
    history.push('/');
  };

  console.log('movie is', movie[0]);
  console.table(movie);

  return (
    <>
      <Grid
        container
        spacing={3}
        className={classes.spacingTop}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Paper elevation={3}>
            <Typography variant="h3">HELLOOO</Typography>
            {/* <img
          onClick={() => handleImageClick({ movie })}
          src={movie.poster}
          alt={movie.title}
        /> */}
            {/* <h3>{movie[0].title}</h3>
            <img src={movie[0].poster} alt={movie.title}></img>
            <p>{movie[0].description}</p> */}
            <Typography variant="body1" className={classes.descriptText}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Details;
