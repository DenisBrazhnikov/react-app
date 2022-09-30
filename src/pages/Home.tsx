import React from "react";
import MovieItems from "./components/MovieItems";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowTrendUp, faChartPie} from "@fortawesome/free-solid-svg-icons";

function Home() {
    return (
        <>
            <div className="h4">
                <span className="me-2">Popular</span>
                <FontAwesomeIcon icon={faChartPie}/>
            </div>

            <hr/>

            <MovieItems movies={
                [
                    {id: 1, name: 'The Matrix Resurrections', date: '2021'},
                    {id: 2, name: 'The Matrix Resurrections', date: '2022'},
                    {id: 2, name: 'The Matrix Resurrections', date: '2022'},
                    {id: 2, name: 'The Matrix Resurrections', date: '2022'}
                ]
            }/>

            <div className="h4">
                <span className="me-2">Trending</span>
                <FontAwesomeIcon icon={faArrowTrendUp}/>
            </div>

            <hr/>

            <MovieItems movies={
                [
                    {id: 1, name: 'The Matrix Resurrections', date: '2021'},
                    {id: 2, name: 'The Matrix Resurrections', date: '2022'},
                    {id: 2, name: 'The Matrix Resurrections', date: '2022'},
                    {id: 2, name: 'The Matrix Resurrections', date: '2022'}
                ]
            }/>
        </>
    )
}

export default Home;