import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
    padding: 20px 40px;
`

export const Input = styled.input`
    width:300px;`

export const MovieList = styled.ul`
    padding:0;
    font-size:22px;
    margin-left:20px;
`

export const MovieLink = styled(Link)`
    text-decoration:none;
`