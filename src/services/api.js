import axios from 'axios';

//minha chave 0f9bb6adaa96d5391aae6eccdf5fb3d1cf8895bb

export const key = "0f9bb6adaa96d5391aae6eccdf5fb3d1cf8895bb";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization' : `Bearer ${key}`
    }
})

export default api;