import destination from "../Controllers/destination.controller.js";
import { Router } from 'express';

const destinationRoute = Router();

destinationRoute.get('/image', destination)

export default destinationRoute;