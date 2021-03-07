import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// MATERIAL UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// Components
import MovieList from '../MovieList/MovieList';
import Nav from '../Nav/Nav';
import AddMovieForm from '../AddMovieForm/AddMovieForm';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#74b9ff',
      },
      secondary: {
        main: '#a29bfe',
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Nav />
          <Switch>
            {/* Home/Movie List Page */}
            <Route path="/" component={MovieList} exact />
            {/* Add Movie page */}
            <Route path="/addmovie" component={AddMovieForm} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
