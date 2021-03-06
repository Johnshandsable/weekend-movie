import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Details() {
  const movie = useSelector((store) => store.singleMovie);
  const history = useHistory();

  // HANDLES THE USER GOING TO DETAILS PAGE WITHOUT CLICKING
  if (movie.any === undefined) {
    history.push('/');
  }

  const handleClick = () => {
    history.push('/');
  };

  return (
    <>
      <button onClick={() => handleClick()}>Go Back</button>
      <h3>{movie[0].title}</h3>
      <img src={movie[0].poster}></img>
      <p>{movie[0].description}</p>
    </>
  );
}

export default Details;
