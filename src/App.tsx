import { ReactElement, useEffect, useState } from "react";
import { IMovie } from "./interfaces";

import AddMovie from "./components/AddMovie/AddMovie";
import MovieList from "./components/MovieList/MovieList";

export function App(): ReactElement {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const addMovieToList = (newMovie: IMovie) => {
    setMovies([...movies, newMovie])
  }

  const removeMovieFromList = (movieToRemove: IMovie) => {
    setMovies(movies.filter(movie => movie !== movieToRemove))
  }

  useEffect(() => {
    console.log('Updated movies array:', movies);
  }, [movies]); // Log the movies array whenever it's state changes

  return (
    <>
      <AddMovie addMovieToList={addMovieToList} />
      <MovieList movies={movies} removeMovieFromList={removeMovieFromList} />
    </>
  );
}
