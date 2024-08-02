import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { IMovie } from "../../../interfaces";


export const useMovieForm = (addMovieToList: (movie: IMovie) => void) => {
    const [formData, setFormData] = useState<IMovie>({
        id: "",
        title: "",
        rating: 0,
        genre: "",
        description: ""
    })

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

    return { formData, handleInputChange, handleSubmit, logMovie, clearForm}
}