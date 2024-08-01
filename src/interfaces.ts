export interface IMovie {
    title: string;
    rating: number;
    genre: string;
    description: string;
  }
  
  export interface AddTitleProps {
    title: string;
    onTitleChange: (newTitle: string) => void;
  }

  export interface AddRatingProps {
    rating: number;
    onRatingChange: (newRating: number) => void;
  }

  export interface AddGenreProps {
    genre: string;
    onGenreChange: (newGenre: string) => void;
  }

  export interface AddDescriptionProps {
    description: string;
    onDescriptionChange: (newDescription: string) => void;
  }
  
  export interface FormButtonsProps {
    onClear: () => void;
  }

export interface AddMovieProps {
  addMovieToList: (movie: IMovie) => void;
}