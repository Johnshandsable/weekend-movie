import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// MATERIAL UI
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
    whiteFont: {
      color: '#fff',
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
    setNewMovie({ ...newMovie });
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
              variant="outlined"
              color="secondary"
              onClick={() => {
                handleCancel();
              }}
            >
              Cancel
            </Button>{' '}
            <Button color="primary" variant="outlined" type="submit">
              Save
            </Button>
          </FormControl>
        </Grid>
      </Grid>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a29bfe"
          fill-opacity="1"
          d="M0,256L0,64L36.9,64L36.9,32L73.8,32L73.8,128L110.8,128L110.8,0L147.7,0L147.7,256L184.6,256L184.6,96L221.5,96L221.5,64L258.5,64L258.5,224L295.4,224L295.4,224L332.3,224L332.3,160L369.2,160L369.2,96L406.2,96L406.2,192L443.1,192L443.1,192L480,192L480,160L516.9,160L516.9,288L553.8,288L553.8,128L590.8,128L590.8,288L627.7,288L627.7,32L664.6,32L664.6,32L701.5,32L701.5,288L738.5,288L738.5,288L775.4,288L775.4,160L812.3,160L812.3,128L849.2,128L849.2,160L886.2,160L886.2,288L923.1,288L923.1,288L960,288L960,160L996.9,160L996.9,64L1033.8,64L1033.8,160L1070.8,160L1070.8,96L1107.7,96L1107.7,224L1144.6,224L1144.6,64L1181.5,64L1181.5,96L1218.5,96L1218.5,128L1255.4,128L1255.4,320L1292.3,320L1292.3,128L1329.2,128L1329.2,160L1366.2,160L1366.2,64L1403.1,64L1403.1,32L1440,32L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}

export default AddMovieForm;
