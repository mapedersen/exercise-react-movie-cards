import { ReactElement } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import { IMovieListProps } from "@interfaces";

export default function MovieList({ movies, removeMovieFromList }: IMovieListProps):ReactElement {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={4} p={4}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClickRemove={() => removeMovieFromList(movie.id)}/>
      ))}
    </SimpleGrid>
  )
}