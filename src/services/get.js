import axios from "axios";

export function pullFilmsCatalog() {
    const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
    const promise = axios.get(url);
    return promise;
};

export function pullMovieInfos(id) {
    const url = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`;
    const promise = axios.get(url);
    return promise;
};

export function pullSessionSeats(id) {
    const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`;
    const promise = axios.get(url);
    return promise;
};