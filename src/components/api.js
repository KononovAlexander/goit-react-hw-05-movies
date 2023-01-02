import axios from 'axios';

const KEY = '805efc04c3a7e613b1259ae766adc4d8';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    // const baseURL = 'https://api.themoviedb.org/3/';

    export const getSearchFilms = async (query) => {
        // const films = await fetch(`${baseURL}/search/movie/?api_key=${KEY}&query=${query}`)
        // .then(response => response.json())
        // .then(data => {return data})
        // console.log('films.results: ', films.results);
        // if(films){return films.results}else{return {}}

        const films = await axios.get('search/movie', {
            params: {
              query: query,
              api_key: KEY,
              language: 'en-US',
            },
          });
          return films.data.results;
    }

    export const  getTrendFilms = async () => {
            // const response = await fetch(`${baseURL}/trending/movie/week?api_key=${KEY}`)
            // .then(response => response.json())
            // .then(data => {return data})
            // return response.results;
            const films = await axios.get('trending/movie/week', {
                params: {
                  api_key: KEY,
                },
              });
              return films.data.results;
        }

    export const getFilmById = async (filmId) => {
            
            // const film = await fetch(`${baseURL}/movie/${filmId}?api_key=${KEY}`)
            // .then(response => response.json())
            // .then(data => {return data})
            // return film;

            const film = await axios.get(`movie/${filmId}`, {
                params: {
                  api_key: KEY,
                  language: 'en-US',
                },
              });
              return film.data;
        };
    export const getFilmCreditsByID = async (filmId) => {

            // const credits = await fetch(`${baseURL}/movie/${filmId}/credits?api_key=${KEY}`)
            // .then(response => response.json())
            // .then(data => {return data})
            // return credits;

            const credits = await axios.get(`movie/${filmId}/credits`, {
                params: {
                  api_key: KEY,
                  language: 'en-US',
                },
              });
              return credits.data;
    };     
    export const getFilmReviewsByID = async (filmId) => {
        // const reviews = await fetch(`${baseURL}/movie/${filmId}/reviews?api_key=${KEY}`)
        // .then(response => response.json())
        // .then(data => {return data})
        // return reviews;

        const rewiews = await axios.get(`movie/${filmId}/reviews`, {
            params: {
              api_key: KEY,
              language: 'en-US',
            },
          });
          return rewiews.data;
    };
