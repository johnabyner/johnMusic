import express from "express";
import cors from 'cors';
const app = express();

//CORS
const allowedOrigins = process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL.split(',') //will allow many urls
    : "*" //if you not configure the .env file

const corsOptions = {
    origin: allowedOrigins, // Puxado do seu arquivo .env
    methods: 'GET,POST,PUT,DELETE',
    optionsSuccessStatus: 200 // Garante compatibilidade com navegadores legados (ex: IE11)
}
app.use(cors(corsOptions));

//ROUTER
import router from './routes/router.js'
app.use(router);

export default app;