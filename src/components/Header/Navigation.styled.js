import styled from 'styled-components'
import { NavLink } from "react-router-dom";


export const Navbar = styled.nav`
    display:flex;
    height:100%;
    width:100%;
    align-items: center;
    font-size:30px;
`;

export const StyledLink = styled(NavLink)`
    text-decoration:none;
    margin-left:20px;
    text-transform: capitalize;
    color: #3d3d3d;
    &.active {
        color: #d17d06;
      }
`