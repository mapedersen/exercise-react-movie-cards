import { ReactElement } from "react";
import AddTitle from "./AddTitle";
import AddRating from "./AddRating";
import AddGenre from "./AddGenre";
import AddDescription from "./AddDescription";
import FormButtons from "./FormButtons";

import { useState } from "react";
import { AddMovieProps, IMovie } from "../../interfaces";

export default function AddMovie( {AddMovieToList}: AddMovieProps): ReactElement {

    const [title, setTitle] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [genre, setGenre] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newMovie: IMovie = {title, rating, genre, description}
        AddMovieToList(newMovie);
        logMovie();
        clearForm();
    }

    const logMovie = () => {
        console.log('Movie details:', { title, rating, genre, description });
    }

    const clearForm = () => {
        setTitle("");
        setRating(0);
        setGenre("");
        setDescription("");
    }

    return (
        <form id="movieForm" onSubmit={handleSubmit}>
            <AddTitle title={title} onTitleChange={setTitle} />
            <AddRating rating={rating} onRatingChange={setRating} />
            <AddGenre genre={genre} onGenreChange={setGenre} />
            <AddDescription description={description} onDescriptionChange={setDescription} />
            <FormButtons onClear={clearForm}/>
        </form>
    )
}