import { ReactElement } from "react";
import { useMovieForm } from "./customHooks/useMovieForm";
import { Box, Stack, Heading } from "@chakra-ui/react";

import AddTitle from "./components/AddTitle";
import AddRating from "./components/AddRating";
import AddGenre from "./components/AddGenre";
import AddDescription from "./components/AddDescription";
import FormButtons from "./components/FormButtons";

import { AddMovieProps } from "@interfaces";

export default function AddMovie( {addMovieToList}: AddMovieProps): ReactElement {

    const { formData, handleInputChange, handleSubmit, clearForm } = useMovieForm(addMovieToList);

    return (
        <Box as="form" id="movieForm" onSubmit={handleSubmit} p={4} borderWidth={1} borderRadius="md">
            <Heading as="h2" size="lg" mb={4}>Add a Movie</Heading>
            <Stack>
                <AddTitle name="title" value={formData.title} onChange={handleInputChange} />
                <AddRating name="rating" value={formData.rating} onChange={handleInputChange} />
                <AddGenre name="genre" value={formData.genre} onChange={handleInputChange} />
                <AddDescription name="description" value={formData.description} onChange={handleInputChange} />
                <FormButtons onClear={clearForm}/>
            </Stack>
        </Box>
    )
}