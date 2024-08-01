import { ReactElement } from 'react'
import { IMovie } from '../../interfaces';

interface MovieCardsProps {
  movie: IMovie;
  onClick: () => void;
}

export default function MovieCard({ movie, onClick }: MovieCardsProps):ReactElement {
  return (
    <div className="MovieCard" onClick={onClick}>
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
      <p>Description: {movie.description}</p>
    </div>
  )
}
