import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://treinamento-nodejs-app-masters.herokuapp.com',
    headers: {
        Authorization: localStorage.getItem('auth-token')
    },
});

export const setAuthToken = (token) => {
    const authToken = 'Bearer ' + token;
    localStorage.setItem('auth-token', authToken);
    api.defaults.headers.common['Authorization'] = authToken;
}