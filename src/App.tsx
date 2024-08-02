import { ReactElement, useEffect, useState } from "react";
import { Box, Flex, Container } from "@chakra-ui/react";
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
    <Flex minHeight="100vh" alignItems="center" justifyContent="center" bg="gray.50" p={4}>
      <Container maxW="container.lg">
        <Flex>
          <Box flex="1" maxW="30%" mr={4}>
            <AddMovie addMovieToList={addMovieToList} />
          </Box>
          <Box flex="2" maxW="70%">
            <MovieList movies={movies} removeMovieFromList={removeMovieFromList} />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}
