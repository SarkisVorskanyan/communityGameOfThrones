
import axios  from 'axios';

const token: string | null = localStorage.getItem('token') ? localStorage.getItem('token') : null;

export const instance = axios.create({
    baseURL: `${process.env.REACT_APP_PORT}`,
    headers: {
        'Authorization': `Bearer ${token}`
    },

})