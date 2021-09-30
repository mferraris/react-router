import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movies, set_Movies] = useState([]);

  const search = async () => {
    // encode the string so special characters don't mess up the URL:
    const queryParam = encodeURIComponent(searchText);

    const response = await axios.get(
      `https://omdbapi.com/?apikey=ca8ac45d&s=${queryParam}` // use your personal key
    );

    console.log("Success!", response.data.Search);

    set_Movies(response.data.Search);
  };
  /////////////////////////////////////////////////////////////
  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText} // right now the input value is fixed on the initial useState
          onChange={(event) => set_searchText(event.target.value)} // calls set_searchtext and updates the useState when typing input
        />
        <button onClick={search}>Search</button>
        {!movies ? (
          <h3>Sorry, no results</h3>
        ) : (
          movies.map((movie) => {
            // "movie" is just the name of the parameter passed to this .map
            return (
              <div key={movie.imdbID}>
                <Link to={`/movie-details/${movie.imdbID}`}>
                  <h3>
                    {movie.Title} ({movie.Year})
                  </h3>
                </Link>
                <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
              </div>
            );
          })
        )}
      </p>
    </div>
  );
}
