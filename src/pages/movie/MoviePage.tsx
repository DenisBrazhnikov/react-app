import React from "react";
import {useParams} from "react-router-dom";

function MoviePage() {
    const {id} = useParams();

    return (
        <>Movie: {id}</>
    )
}

export default MoviePage;