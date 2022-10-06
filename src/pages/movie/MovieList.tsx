import React from "react";
import MovieItems from "../components/MovieItems";
import {gql, useQuery} from "@apollo/client";

function MovieList() {
    const {loading, error, data} = useQuery(
        gql`
            query {
                discoverMovies {
                    id, original_title, release_date, poster_path, popularity
                }
            }
        `
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <MovieItems movies={data.discoverMovies}/>
        </>
    )
}

export default MovieList;