import { ReactElement } from "react";
import { useMovieForm } from "./customHooks/useMovieForm";

import AddTitle from "./components/AddTitle";
import AddRating from "./components/AddRating";
import AddGenre from "./components/AddGenre";
import AddDescription from "./components/AddDescription";
import FormButtons from "./components/FormButtons";

import { AddMovieProps } from "../../interfaces";

export default function AddMovie( {addMovieToList}: AddMovieProps): ReactElement {

    const { formData, handleInputChange, handleSubmit, clearForm } = useMovieForm(addMovieToList);

    return (
        <form id="movieForm" onSubmit={handleSubmit}>
            <h2>Add a movie</h2>
            <AddTitle name="title" value={formData.title} onChange={handleInputChange} />
            <AddRating name="rating" value={formData.rating} onChange={handleInputChange} />
            <AddGenre name="genre" value={formData.genre} onChange={handleInputChange} />
            <AddDescription name="description" value={formData.description} onChange={handleInputChange} />
            <FormButtons onClear={clearForm}/>
        </form>
    )
}