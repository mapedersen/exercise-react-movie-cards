import { ReactElement } from "react";
import { IMovie } from "../../interfaces";

interface IMovieListProps {
  movie: IMovie;
}

export function MovieList({ movie }: IMovieListProps):ReactElement {
  return (
    <div></div>
  )
}