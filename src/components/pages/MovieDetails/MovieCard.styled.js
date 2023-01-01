import { Link } from "react-router-dom";
import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    padding: 20px 40px;
`
export const Btn = styled(Link)`
    margin-left:40px;
    border: 1px grey solid;
    border-radius:5px;
    font-size:16px;
    text-decoration:none;
    padding:2px 5px;
    alighn-items:middle;
    background-color: transparent;
`
export const Poster = styled.img`
    width:200px;
` 
export const MovieInfo = styled.div`
    display:flex;
    flex-direction:column;
    padding: 0 15px; 
    &:not(:first-child) {}
    & p {
        margin:10px 0;
        font-size: 22px;
    }
`
export const Title = styled.h3`
    font-size:36px;
    margin:10px 0;
    & span{
        font-size:30px;
        margin-left:10px;
    }
`
export const SubTitle = styled.h4`
    font-size: 26px;
    margin: 0;
` 
export const Text = styled.p`
    margin:10px 0;
    font-size: 10px;
`
export const Descr = styled.div`
padding: 0 40px;
display:flex;
flex-direction:column;
`
export const InfoTitle = styled.h5`
font-size: 18px;
font-weight: normal;
margin:0px 0;
`

export const LinkList = styled.ul`
    padding-left:24px;
    margin:10px 0;
    & li {
        font-size:22px;
        &:not(:last-child){
            margin-bottom:16px;
        }
    }
`
export const StyledLink = styled(Link)`
    text-transform: capitalize;
`