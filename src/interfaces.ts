export interface IMovie {
    id: string;
    title: string;
    rating: number;
    genre: string;
    description: string;
  }
  
export interface FormFieldProps<T> {
  name: keyof IMovie;
  value: T,
  onChange: (name: keyof IMovie, value: T) => void;
}
  
export interface FormButtonsProps {
  onClear: () => void;
}

export interface AddMovieProps {
  addMovieToList: (movie: IMovie) => void;
}

export interface MovieCardsProps {
  movie: IMovie;
  onClickRemove: (id: string) => void;
}

export interface IMovieListProps {
  movies: IMovie[];
  removeMovieFromList: (id: string) => void;
}