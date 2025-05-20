import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import destinationRoute from './routes/destinations.route.js';

const app = express();

app.use(express.json())
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

app.use('/destination', destinationRoute)

export default app;