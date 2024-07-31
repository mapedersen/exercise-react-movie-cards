import { ReactElement } from "react";
import { IMovie } from "../../interfaces";

interface IMovieListProps {
  movies: IMovie[];
}

export default function MovieList({ movies }: IMovieListProps):ReactElement {
  return (
    <div></div>
  )
}