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
    genre_id: 1,
  });

  const handleSave = (evt) => {
    evt.preventDefault();

    console.table(newMovie);
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
    <form onSubmit={handleSave}>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={newMovie.title}
        onChange={handleChange}
      />{' '}
      <br />
      <input
        type="text"
        name="poster"
        placeholder="poster_url"
        value={newMovie.poster}
        onChange={handleChange}
      />{' '}
      <br />
      <textarea
        name="description"
        placeholder="description"
        rows="4"
        cols="50"
        value={newMovie.description}
        onChange={handleChange}
      />{' '}
      <br />
      <select name="genre_id" onChange={handleChange} id="genres">
        <option value={1}>Adventure</option>
        <option value={2}>Animated</option>
        <option value={3}>Biography</option>
        <option value={4}>Comedy</option>
        <option value={5}>Disaster</option>
        <option value={6}>Drama</option>
        <option value={7}>Epic</option>
        <option value={8}>Fantasy</option>
        <option value={9}>Musical</option>
        <option value={10}>Romantic</option>
        <option value={11}>Science Fiction</option>
        <option value={12}>Space-Opera</option>
        <option value={13}>Superhero</option>
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
