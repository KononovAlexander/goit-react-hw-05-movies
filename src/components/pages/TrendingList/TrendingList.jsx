import PropTypes from "prop-types";
import { List } from "./TrendingList.styled";
import { StyledLink } from "./TrendingList.styled";


export const TrendingList =  ({films}) => {
    // console.log('films: ', films);
    
    return(
        <List>
            {films.map(({id, title}) => 
                (<li key={id}><StyledLink  to={`/movies/:${id}`}>
                    {title}
                </StyledLink></li>))}
            
        </List>
    )
}
TrendingList.propTypes = {
    images:PropTypes.arrayOf(PropTypes.object)
  }