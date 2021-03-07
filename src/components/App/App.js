import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import MovieList from '../MovieList/MovieList';
import Nav from '../Nav/Nav';
import AddMovieForm from '../AddMovieForm/AddMovieForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          {/* Home/Movie List Page */}
          <Route path="/" component={MovieList} exact />
          {/* Add Movie page */}
          <Route path="/addmovie" component={AddMovieForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
