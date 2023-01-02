import axios from 'axios';

const KEY = '805efc04c3a7e613b1259ae766adc4d8';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

    export const getSearchFilms = async (query) => {

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

            const films = await axios.get('trending/movie/week', {
                params: {
                  api_key: KEY,
                },
              });
              return films.data.results;
        }

    export const getFilmById = async (filmId) => {

            const film = await axios.get(`movie/${filmId}`, {
                params: {
                  api_key: KEY,
                  language: 'en-US',
                },
              });
              return film.data;
        };
    export const getFilmCreditsByID = async (filmId) => {

            const credits = await axios.get(`movie/${filmId}/credits`, {
                params: {
                  api_key: KEY,
                  language: 'en-US',
                },
              });
              return credits.data;
    };     
    export const getFilmReviewsByID = async (filmId) => {

        const rewiews = await axios.get(`movie/${filmId}/reviews`, {
            params: {
              api_key: KEY,
              language: 'en-US',
            },
          });
          return rewiews.data;
    };
