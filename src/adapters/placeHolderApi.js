import axios from 'axios';

export const placeApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})