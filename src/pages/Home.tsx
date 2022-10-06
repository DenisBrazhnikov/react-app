import React from "react";
import MovieItems from "./components/MovieItems";
import {useQuery, gql} from '@apollo/client';

function Home() {
    const {loading, error, data} = useQuery(
        gql`
            query {
                popularMovies {
                    id, original_title, release_date, poster_path, popularity
                }

                upcomingMovies {
                    id, original_title, release_date, poster_path
                }
            }
        `
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <div className="h4">
                <span className="me-2">Popular</span>
            </div>

            <hr/>

            <MovieItems movies={data.popularMovies}/>

            <div className="h4">
                <span className="me-2">Upcoming</span>
            </div>

            <hr/>

            <MovieItems movies={data.upcomingMovies}/>
        </>
    )
}

export default Home;