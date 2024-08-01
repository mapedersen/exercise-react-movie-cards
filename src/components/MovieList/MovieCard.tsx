import { ReactElement } from 'react'
import { IMovie } from '../../interfaces';

interface MovieCardsProps {
  movie: IMovie;
}

export default function MovieCard({ movie }: MovieCardsProps):ReactElement {
  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
      <p>Description: {movie.description}</p>
    </div>
  )
}
