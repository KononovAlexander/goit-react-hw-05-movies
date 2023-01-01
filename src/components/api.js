

    const baseURL = 'https://api.themoviedb.org/3/';
    const KEY = '805efc04c3a7e613b1259ae766adc4d8';

    export const getSearchFilms = async (query) => {
        const films = await fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${KEY}&query=${query}`)
        .then(response => response.json())
        .then(data => {return data})
        return films.results;
    }

    export const  getTrendFilms = async () => {
            const response = await fetch(`${baseURL}/trending/movie/week?api_key=${KEY}`)
            .then(response => response.json())
            .then(data => {return data})
            return response.results;
        }

    export const getFilmById = async (filmId) => {
            
            const film = await fetch(`${baseURL}/movie/${filmId}?api_key=${KEY}`)
            .then(response => response.json())
            .then(data => {return data})
            return film;
        };
    export const getFilmCreditsByID = async (filmId) => {

            const credits = await fetch(`${baseURL}/movie/${filmId}/credits?api_key=${KEY}`)
            .then(response => response.json())
            .then(data => {return data})
            return credits;
    };     
    export const getFilmReviewsByID = async (filmId) => {
        const reviews = await fetch(`${baseURL}/movie/${filmId}/reviews?api_key=${KEY}`)
        .then(response => response.json())
        .then(data => {return data})
        return reviews;
    };
