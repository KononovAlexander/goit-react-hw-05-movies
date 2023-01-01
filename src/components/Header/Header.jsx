import {Container} from './Container.styled'
import { Navbar } from './Navigation.styled'
import { StyledLink } from './Navigation.styled'

export const Header = () => {
    return(
        <Container>
            <Navbar>
                <StyledLink to="/" end>home</StyledLink>
                <StyledLink to="/movies" >movies</StyledLink>

            </Navbar>
        </Container>
    )
}