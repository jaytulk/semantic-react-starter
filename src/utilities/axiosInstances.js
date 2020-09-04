import axios from 'axios';

const defaultAxios = axios.create({
    baseURL: 'https://localhost:5001/api/',
    timeout: 10000,
});

export default defaultAxios;
