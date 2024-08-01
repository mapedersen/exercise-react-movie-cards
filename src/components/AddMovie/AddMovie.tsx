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

    const addMovies = () => {
        console.log('Movie details: ', {title, rating})
    }

    return (
        <>
            <AddTitle title={title} onTitleChange={setTitle}/>
            <AddRating rating={rating} onRatingChange={setRating} />
            <AddGenre />
            <AddDescription />
            <FormButtons onAddClick={addMovies}/>
        </>
    )
}