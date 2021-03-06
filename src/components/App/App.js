import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Switch>
          {/* Home/Movie List Page */}
          <Route path="/" component={MovieList} exact />
          {/* Details page */}
          <Route path="/details" component={Details} exact />
          {/* Add Movie page */}
          <Route path="/addmovie" component={AddMovieForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
