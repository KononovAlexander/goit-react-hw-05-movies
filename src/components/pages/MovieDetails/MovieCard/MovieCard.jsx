import { useLocation} from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { Container, Poster, MovieInfo, Title, SubTitle, Text, Btn} from '../MovieCard.styled';

 const MovieCard = ({movie}) => {
    const location = useLocation();
    const PrevLink = location.state?.from ?? '/';

    const poster = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
    const date = new Date(movie.release_date).getFullYear()
    return(
        <div>
            <Btn to={PrevLink}>
            <HiArrowLeft size="14" style= {{marginRight:5}} />
                Go back</Btn>
            <Container>
                <Poster src={poster} alt={movie.title} /> 
                <MovieInfo>
                    <Title>{movie.title}<span>({date})</span></Title>
                    <Text>User score: {Math.round(movie.vote_average * 10)}%</Text>    
                    <SubTitle>Overview</SubTitle>
                    <Text>{movie.overview}</Text>    
                    <SubTitle>Genres</SubTitle>
                    <Text>{movie.genres?.map(genre => genre.name).join(' ')}</Text>           
                </MovieInfo>
            </Container>
        </div>
    )
}

export default  MovieCard