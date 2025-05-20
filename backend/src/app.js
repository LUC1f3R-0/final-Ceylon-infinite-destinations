import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import destinationRoute from './routes/destinations.route.js';
import apiKeyMiddleware from './Middlewares/apiKey.middleware.js';

const app = express();

app.use(express.json())

const allowedOrigin = process.env.FRONTEND_URL;

app.use(cors({ origin: function (origin, callback) { if (!origin || origin === allowedOrigin) { callback(null, true); } else { callback(new Error('Not allowed by CORS')); } }, credentials: true, }));

app.use('/destination', apiKeyMiddleware, destinationRoute)

export default app;