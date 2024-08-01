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
  
  export interface FormButtonsProps {
    onAddClick: () => void;
  }
