import { ReactElement } from "react";
import AddTitle from "./AddTitle";
import AddRating from "./AddRating";
import AddGenre from "./AddGenre";
import AddDescription from "./AddDescription";
import FormButtons from "./FormButtons";

import { useState } from "react";



export default function AddMovie(): ReactElement {
    const [title, setTitle] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [genre, setGenre] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const addMovies = () => {
        console.log('Movie details: ', {title, rating, genre, description})
    }

    return (
        <>
            <AddTitle title={title} onTitleChange={setTitle} />
            <AddRating rating={rating} onRatingChange={setRating} />
            <AddGenre genre={genre} onGenreChange={setGenre} />
            <AddDescription description={description} onDescriptionChange={setDescription} />
            <FormButtons onAddClick={addMovies}/>
        </>
    )
}