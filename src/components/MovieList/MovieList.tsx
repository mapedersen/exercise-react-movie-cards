import { ReactElement } from "react";
import { IMovie } from "../../interfaces";
import MovieCard from "./MovieCard";

interface IMovieListProps {
  movies: IMovie[];
}

export default function MovieList({ movies }: IMovieListProps):ReactElement {
  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  )
}