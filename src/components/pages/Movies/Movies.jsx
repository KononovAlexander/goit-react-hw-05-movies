import { getSearchFilms } from "components/api"
import {Container, Input, MovieLink, MovieList} from "./Movies.styled"
import { useState} from 'react';
import {useLocation } from 'react-router-dom';


 const Movies = () => {
    const [searchFilms, setSearchFilms] = useState([]);
    const location = useLocation();


    const onSubmit = (event) => {
        event.preventDefault();
        getSearchFilms(event.target.elements[0].value)
        .then(data => {
            setSearchFilms(data)
        })
    }
    
    return(
        <Container>
            <form onSubmit={onSubmit}>
            <Input type="text" />
             <button type="submit">Search</button>   
            </form>
            <div>
                <MovieList>{
                    searchFilms.map(film => (
                        <li key={film.id}>
                            <MovieLink to={`/movies/${film.id}`} state={{ from: location }}>{film.title}</MovieLink>
                        </li>
                    ))
                    }</MovieList>
            </div>
        </Container>
    )
}
export default Movies;