import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const [movie, setMovie] = useState({});

  const { id } = useParams(); // useParams gets the parameter from the route and we can use it to get the data we need

  const fetchData = async () => {
    const response = await axios.get(
      `https://omdbapi.com/?apikey=ca8ac45d&i=${id}`
    );
    setMovie(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>
        {movie.Title} ({movie.Year})
      </h1>
      <img src={movie.Poster} alt={`Poster for the movie ${movie.Title}`}></img>
      <p>Directed by: {movie.Director}</p>
      <h3>Synopsis:</h3>
      <p>{movie.Plot}</p>
    </div>
  );
}
