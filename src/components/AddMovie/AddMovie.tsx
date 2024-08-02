import { ReactElement } from "react";
import AddTitle from "./AddTitle";
import AddRating from "./AddRating";
import AddGenre from "./AddGenre";
import AddDescription from "./AddDescription";
import FormButtons from "./FormButtons";

import { useState } from "react";
import { AddMovieProps, IMovie } from "../../interfaces";

import "./index.css"

export default function addMovie( {addMovieToList}: AddMovieProps): ReactElement {

    const [formData, setFormData] = useState<IMovie>({
        title: "",
        rating: 0,
        genre: "",
        description: ""
    });

    const handleInputChange = (name: keyof IMovie, value: string | number) => {
        setFormData(prev => ({...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newMovie: IMovie = {...formData};
        addMovieToList(newMovie);
        logMovie();
        clearForm();
    }

    const logMovie = () => {
        console.log('Movie details:', formData);
    }

    const clearForm = () => {
        setFormData({
            title: "",
            rating: 0,
            genre: "",
            description: "",
        })
    }

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