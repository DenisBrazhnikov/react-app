import React from "react";
import MovieItems from "../components/MovieItems";

function MovieList() {
    return (
        <>
            <MovieItems movies={
                [
                    {id: 1, name: 'The Matrix Resurrections', date: '2021'},
                    {id: 2, name: 'The Matrix Resurrections', date: '2022'},
                    {id: 2, name: 'The Matrix Resurrections', date: '2022'},
                    {id: 2, name: 'The Matrix Resurrections', date: '2022'},
                    {id: 2, name: 'The Matrix Resurrections', date: '2022'}
                ]
            }/>
        </>
    )
}

export default MovieList;