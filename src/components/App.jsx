import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import { Home } from "./pages/Home/Home";
// import { Movies } from "./pages/Movies/Movies";
// import {MovieDetails} from "./pages/MovieDetails/MovieDetails"
// import Cast from "./pages/MovieDetails/Cast/Cast"
// import Reviews from "./pages/MovieDetails/Reviews/Reviews"
import { lazy, Suspense } from 'react';


const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./pages/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('./pages/MovieDetails/Reviews/Reviews'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      </Suspense>
    </div>
  );
};
