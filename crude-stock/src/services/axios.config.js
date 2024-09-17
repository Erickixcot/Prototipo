import axios from "axios";






const URL = import.meta.env.VITE_API_URL || 'https://erick-production.up.railway.app'; // O tu URL en producción

export const axiosInstance = axios.create({
    baseURL: URL,
    timeout: 6000, // Tiempo máximo de espera para la respuesta
    withCredentials: true, // Si usas credenciales como cookies o tokens
});



// Usa la variable de entorno para determinar la base URL
/*const URL = import.meta.env.VITE_API_URL || 'https://erick-production.up.railway.app'; // Default es localhost para desarrollo

export const axiosInstance = axios.create({
    baseURL: URL,
    timeout: 6000, // Tiempo máximo de espera para la respuesta
});*/

/*const URL = 'http://localhost:5000';

export const axiosInstance = axios.create({
    baseURL: URL,
    timeout: 6000, // Tiempo máximo de espera para la respuesta
   
});*/
