// import {getTrendFilms} from "./api"
// import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import {TrendingList} from "../TrendingList/TrendingList"
import {getTrendFilms} from "../../api"


export const Home = () => {

    const [filmList, setFilmList] = useState([]);

    useEffect(() => {

        getTrendFilms()
        .then(data => {
            setFilmList(data);
        })

    },[]);
    return(
        <div>
            <h2>Trending today</h2>
            <TrendingList films={filmList} />
        </div>
    )
}