import { useState, useEffect } from "react";

import Search from "./Search";
import Card from "./Card";

const MiApi = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const API_URL = "https://api.themoviedb.org/3/";
  const INITIAL = "movie/popular?language=en-US&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTdlZDYwZGFhNGU1ZTU0MzhjNjZkY2Q2M2VlNWFhOCIsInN1YiI6IjY0YjcyZTNmYjFmNjhkMDEwNjk1MjgzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Gdz-hO0K9PEOjBN5Dbo48K2uEPxFOxbezVaStkonhk",
    },
  };

  useEffect(() => {
    getMovies(search);
  });

  async function getMovies() {
    if (search === "") {
      const response = await fetch(`${API_URL}${INITIAL}`, options);
      const data = await response.json();
      setMovies(data.results);
    } else {
      const response = await fetch(
        `${API_URL}search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      setMovies(data.results);
    }
  }

  const mostrarPeliculas = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Search
        textMovies={(e) => setSearch(e.target.value)}
        searchMovies={mostrarPeliculas}
      />
      <div className="flex justify-center flex-wrap gap-6 p-5 border-2 py-10 rounded-2xl">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            year={movie.release_date}
            title={movie.title}
            poster={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MiApi;
