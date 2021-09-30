import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
import MovieDetails from "./components/MovieDetails";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/movie-details/:id" component={MovieDetails} />
        <Route path="/discover" component={DiscoverMoviesPage} />
      </Switch>
    </div>
  );
}

export default App;
