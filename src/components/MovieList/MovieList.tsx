import { ReactElement } from "react";
import { IMovie } from "../../interfaces";
import MovieCard from "./MovieCard";

import "./index.css"

interface IMovieListProps {
  movies: IMovie[];
  removeMovieFromList: (id: string) => void;
}


export default function MovieList({ movies, removeMovieFromList }: IMovieListProps):ReactElement {
  return (
    <div className="MovieList" >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={() => removeMovieFromList(movie.id)}/>
      ))}
    </div>
  )
}