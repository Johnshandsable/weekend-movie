import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddMovieForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  let [newMovie, setNewMovie] = useState({
    title: '',
    poster: '',
    description: '',
    genre: '',
  });

  const handleSave = (evt) => {
    evt.preventDefault();
    console.log('New Movie being added', newMovie);
    dispatch({
      type: 'ADD_MOVIE',
      payload: newMovie,
    });
  };

  const handleCancel = () => {
    history.push('/');
  };

  const handleChange = (event) => {
    const property = event.target.name;
    newMovie[property] = event.target.value;
    console.log(newMovie[property]);
    setNewMovie({ ...newMovie, newMovie });
  };

  return (
    <form
      onSubmit={(evt) => {
        handleSave(evt);
      }}
    >
      <input
        type="text"
        onChange={handleChange}
        name="title"
        placeholder="title"
      />{' '}
      <br />
      <input
        type="text"
        onChange={handleChange}
        name="poster"
        placeholder="poster_url"
      />{' '}
      <br />
      <textarea
        name="description"
        onChange={handleChange}
        placeholder="description"
        rows="4"
        cols="50"
      />{' '}
      <br />
      <select name="genre" onChange={handleChange} id="genres">
        <option value="Adventure">Adventure</option>
        <option value="Animated">Animated</option>
        <option value="Biography">Biography</option>
        <option value="Comedy">Comedy</option>
        <option value="Disaster">Disaster</option>
        <option value="Drama">Drama</option>
        <option value="Epic">Epic</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Musical">Musical</option>
        <option value="Romantic">Romantic</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Space-Opera">Space-Opera</option>
        <option value="Superhero">Superhero</option>
      </select>{' '}
      <br />
      <button
        onClick={() => {
          handleCancel();
        }}
      >
        Cancel
      </button>{' '}
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default AddMovieForm;
