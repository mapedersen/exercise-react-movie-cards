import { ReactElement, useEffect, useState } from "react";
import { IMovie } from "./interfaces";

import AddMovie from "./components/AddMovie/AddMovie";
import MovieList from "./components/MovieList/MovieList";

export function App(): ReactElement {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const AddMovieToList = (newMovie: IMovie) => {
    setMovies([...movies, newMovie])
  }

  useEffect(() => {
    console.log('Updated movies array:', movies);
  }, [movies]); // Log the movies array whenever it's state changes

  return (
    <>
      <AddMovie AddMovieToList={AddMovieToList} />
      <MovieList movies={movies}/>
    </>
  );
}
