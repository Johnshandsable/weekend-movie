import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  FilledInput,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';

function AddMovieForm() {
  /* STYLING FOR FORM */
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120,
    },
  }));

  /* VARIABLES */
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  let [newMovie, setNewMovie] = useState({
    title: '',
    poster: '',
    description: '',
    genre_id: 1,
  });

  const handleSave = (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'ADD_MOVIE',
      payload: newMovie,
    });
    setNewMovie({
      title: '',
      poster: '',
      description: '',
      genre_id: 1,
    });
  };

  const handleCancel = () => {
    history.push('/');
  };

  const handleChange = (event) => {
    const property = event.target.name; // OK
    newMovie[property] = event.target.value; // OK
    setNewMovie({ ...newMovie }); // SOMETHING GOES WRONG
  };

  return (
    <>
      <div className="spacing"></div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Typography variant="h5">Add Movie</Typography>
          <FormControl
            onSubmit={handleSave}
            className={classes.formControl}
            fullWidth={true}
          >
            {/* <InputLabel htmlFor="title">Title</InputLabel> */}
            <TextField
              id="title"
              type="text"
              name="title"
              placeholder="Movie Title"
              value={newMovie.title}
              onChange={handleChange}
            />{' '}
            {/* <InputLabel htmlFor="poster">Poster Image</InputLabel> */}
            <TextField
              id="poster"
              type="text"
              name="poster"
              placeholder="Movie Poster URL"
              value={newMovie.poster}
              onChange={handleChange}
            />{' '}
            {/* <InputLabel htmlFor="description">Description</InputLabel> */}
            <TextField
              id="description"
              margin="dense"
              multiline
              rows={2}
              rowsMax={4}
              name="description"
              placeholder="Movie Description"
              rows="4"
              cols="50"
              value={newMovie.description}
              onChange={handleChange}
            />{' '}
            {/* <InputLabel>Genre</InputLabel> */}
            <Select
              name="genre_id"
              onChange={handleChange}
              id="genres"
              value={newMovie.genre_id}
            >
              <MenuItem value={1}>Adventure</MenuItem>
              <MenuItem value={2}>Animated</MenuItem>
              <MenuItem value={3}>Biography</MenuItem>
              <MenuItem value={4}>Comedy</MenuItem>
              <MenuItem value={5}>Disaster</MenuItem>
              <MenuItem value={6}>Drama</MenuItem>
              <MenuItem value={7}>Epic</MenuItem>
              <MenuItem value={8}>Fantasy</MenuItem>
              <MenuItem value={9}>Musical</MenuItem>
              <MenuItem value={10}>Romantic</MenuItem>
              <MenuItem value={11}>Science Fiction</MenuItem>
              <MenuItem value={12}>Space-Opera</MenuItem>
              <MenuItem value={13}>Superhero</MenuItem>
            </Select>{' '}
            <Button
              color="secondary"
              onClick={() => {
                handleCancel();
              }}
            >
              Cancel
            </Button>{' '}
            <Button color="primary" type="submit">
              Save
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

export default AddMovieForm;
