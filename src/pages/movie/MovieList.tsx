import React from "react";
import MovieItems from "../components/MovieItems";
import {gql, useQuery} from "@apollo/client";
import {useForm} from "../../utility/hooks";

function MovieList(this: any) {
    const {onChange, values} = useForm(() => {
    }, {
        year: '',
        genre_id: '',
        lang_code: '',
    });

    const v = values as any;

    const {loading, error, data} = useQuery(
        gql`
            query($options: DiscoverOptions!) {
                discoverMovies (options: $options) {
                    id, original_title, release_date, poster_path, popularity
                },
                getGenres {
                    id, name
                },
                getCountries {
                    iso_639_1, english_name
                }
            },
        `, {
            variables: {
                options: values
            }
        }
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <select name="year" onChange={onChange} className="form-select form-select-sm">
                        <option>Any year</option>
                        {
                            Array.from({length: 20}, (_, i) => (new Date()).getFullYear() - i)
                                .map((year) =>
                                    <option value={year} selected={year === v.year}>{year}</option>
                                )
                        }
                    </select>

                    <select name="genre_id" onChange={onChange} className="form-select form-select-sm">
                        <option>Any genre</option>
                        {
                            data.getGenres.map((genre: any) =>
                                <option value={genre.id} selected={genre.id == v.genre_id}>{genre.name}</option>
                            )
                        }
                    </select>

                    <select name="lang_code" onChange={onChange} className="form-select form-select-sm">
                        <option>Any language</option>
                        {
                            data.getCountries.map((country: any) =>
                                <option value={country.iso_639_1}
                                        selected={country.iso_639_1 == v.lang_code}>{country.english_name}</option>
                            )
                        }
                    </select>
                </div>
                <div className="col-10">
                    <MovieItems movies={data.discoverMovies}/>
                </div>
            </div>
        </>
    )
}

export default MovieList;