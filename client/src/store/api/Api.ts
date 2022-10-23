import axios  from 'axios';
import {SignInType} from "../../types/authType/SignInType";

const token: string | null = localStorage.getItem('token') ? localStorage.getItem('token') : null;

export const instance = axios.create({
    baseURL: `${process.env.REACT_APP_PORT}`,
    headers: {
        'Authorization': `Bearer ${token}`,
    },

})

instance.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

instance.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<SignInType>(`${process.env.REACT_APP_PORT}/refresh`, {withCredentials: false})
            localStorage.setItem('token', response.data.accessToken);
            return instance.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})