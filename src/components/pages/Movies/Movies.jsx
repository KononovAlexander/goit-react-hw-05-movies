import { getSearchFilms } from "components/api"
import {Container, Input, MovieLink, MovieList} from "./Movies.styled"
import { useState, useEffect} from 'react';
import {useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


 const Movies = () => {
    const [searchFilms, setSearchFilms] = useState([]);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log('searchParams: ', searchParams);
    const productName = searchParams.get('query') ?? '';
    console.log('productName: ', productName);

    useEffect(() => {
        if (productName === '') return;
        getSearchFilms(productName)
          .then(data => {
            setSearchFilms(data);
          })
          .catch(err => console.log(err));
      }, [productName]);
    

    const onSubmit = ({query}) => {
        const params = query !== '' ? { query } : {};

        setSearchParams(params)
    }
    return(
        <Container>
            <form onSubmit={onSubmit}>
            <Input type="text" name="query"/>
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