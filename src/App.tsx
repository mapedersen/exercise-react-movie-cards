import { ReactElement, useEffect, useState } from "react";
import MovieList from "./components/MovieList/MovieList";
import AddMovie from "./components/AddMovie/AddMovie";
import { IMovie } from "./interfaces";


export function App(): ReactElement {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const addMovieToList = (newMovie: IMovie) => {
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };
  
  const removeMovieFromList = (movieId: string) => {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== movieId));
  };

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
