import { Router } from 'express';
import destination from "../Controllers/destination.controller.js";

const destinationRoute = Router();

destinationRoute.get('/image', destination)

export default destinationRoute;