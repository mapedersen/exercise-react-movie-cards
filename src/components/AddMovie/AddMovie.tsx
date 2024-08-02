import { useState, ReactElement } from "react";
import { v4 as uuidv4 } from 'uuid';

import AddTitle from "./AddTitle";
import AddRating from "./AddRating";
import AddGenre from "./AddGenre";
import AddDescription from "./AddDescription";
import FormButtons from "./FormButtons";

import { AddMovieProps, IMovie } from "../../interfaces";

export default function AddMovie( {addMovieToList}: AddMovieProps): ReactElement {

    const [formData, setFormData] = useState<IMovie>({
        id: "",
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
        const newMovie: IMovie = {...formData, id: uuidv4()};
        addMovieToList(newMovie);
        logMovie();
        clearForm();
    }

    const logMovie = () => {
        console.log('Movie details:', formData);
    }

    const clearForm = () => {
        setFormData({
            id: "",
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