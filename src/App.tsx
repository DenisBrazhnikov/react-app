import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./errors/NotFound";
import Register from "./pages/auth/Register";
import Layout from "./pages/Layout";
import Login from "./pages/auth/Login";
import MovieList from "./pages/movie/MovieList";
import MoviePage from "./pages/movie/MoviePage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="movies">
                        <Route index element={<MovieList/>}/>
                        <Route path=":id" element={<MoviePage/>}/>
                    </Route>
                    <Route path="register" element={<Register/>}/>
                    <Route path="login" element={<Login/>}/>

                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
