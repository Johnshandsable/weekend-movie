import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Nav() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      fontFamily: 'Spicy Rice',
      textAlign: 'left',
      flexGrow: 1,
    },
    buttonFont: {
      fontFamily: 'Spicy Rice',
      fontSize: '1.25rem',
    },
  }));

  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Movies Saga
        </Typography>
        <Button
          className={classes.buttonFont}
          component={Link}
          to="/"
          color="inherit"
        >
          Home
        </Button>
        <Button
          className={classes.buttonFont}
          component={Link}
          to="/addmovie"
          color="inherit"
        >
          Add Movie
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
