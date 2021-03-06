function AddMovieForm() {
  /*
  1	Adventure
  2	Animated
  3	Biographical
  4	Comedy
  5	Disaster
  6	Drama
  7	Epic
  8	Fantasy
  9	Musical
  10	Romantic
  11	Science Fiction
  12	Space-Opera
  13	Superhero
  */
  return (
    <form>
      <input type="text" placeholder="title" /> <br />
      <input type="text" placeholder="poster_url" /> <br />
      <textarea placeholder="description" rows="4" cols="50" /> <br />
      <select name="genre" id="genres">
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
      <button>Cancel</button> <br />
      <button>Save</button>
    </form>
  );
}

export default AddMovieForm;
