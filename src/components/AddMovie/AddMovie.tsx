import { ReactElement } from "react";
import AddTitle from "./AddTitle";
import AddRating from "./AddRating";
import AddGenre from "./AddGenre";
import AddDescription from "./AddDescription";
import FormButtons from "./FormButtons";



export default function AddMovie(): ReactElement {
    return (
        <>
            <AddTitle />
            <AddRating />
            <AddGenre />
            <AddDescription />
            <FormButtons />
        </>
    )
}