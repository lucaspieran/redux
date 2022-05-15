import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'http://localhost:4000/'
});

export const clienteAxiosAuth = axios.create({
    baseURL: 'http://localhost:5000/api/auth/login'
});

export default clienteAxios;