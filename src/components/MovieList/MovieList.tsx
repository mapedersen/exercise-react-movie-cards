import { ReactElement } from "react";
import { IMovie } from "../../interfaces";
import MovieCard from "./MovieCard";

interface IMovieListProps {
  movies: IMovie[];
  removeMovieFromList: (movie: IMovie) => void;
}


export default function MovieList({ movies, removeMovieFromList }: IMovieListProps):ReactElement {
  return (
    <div className="MovieList" >
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} onClick={() => removeMovieFromList(movie)}/>
      ))}
    </div>
  )
}