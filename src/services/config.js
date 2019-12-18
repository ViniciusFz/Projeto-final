import axios from 'axios'
import app from './app';

export const http = axios.create({
    baseURL: 'http://localhost:3333'
});

export default app;