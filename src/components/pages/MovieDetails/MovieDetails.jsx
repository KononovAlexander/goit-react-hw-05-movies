import PropTypes from "prop-types";
import {getFilmById} from "../../api";
import { useState, useEffect } from "react";
import {  useParams, useLocation, Outlet } from 'react-router-dom';
import  MovieCard  from "./MovieCard/MovieCard";
import { MovieDescr } from "./MovieDescr/MovieDescr";

 const MovieDetails = () => {
    const {movieId} = useParams();
    const [film, setFilm] = useState({});
    const location = useLocation();
    
    const id = Number(movieId.replace(/:/g, ''));
    useEffect(() => {
         if(!id) {return}
        getFilmById(id)
        .then(data => {setFilm(data)})
    },[ id]);

    return(
        <div>
             {film && <MovieCard movie={film} />}
             {film && <MovieDescr  location={location}/>}
             <Outlet /> 

        </div>
    )
}
export default MovieDetails;

MovieDetails.propTypes = {
    film:PropTypes.object }