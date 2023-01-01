// import { Link } from 'react-router-dom';
import { InfoTitle, Container, LinkList, StyledLink, Descr} from '../MovieCard.styled';


export const MovieDescr = ({ location} ) => {

    return(

        <Container style={{borderTop: '1px grey solid', borderBottom:'1px grey solid'}}>
            <Descr>

                <InfoTitle>Additional information</InfoTitle>
                <LinkList>
                    <li><StyledLink to="cast" state={{ from: location.state?.from ?? '/' }}>Cast</StyledLink></li>
                    <li><StyledLink to="reviews" state={{ from: location.state?.from ?? '/' }}>Reviews</StyledLink></li>
                </LinkList>   

            </Descr>
        </Container>
    )
}