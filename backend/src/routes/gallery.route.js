import { Router } from "express";
import gallery from "../Controllers/gallery.controller.js";

const galleryRoute = Router();

galleryRoute.get('/', gallery);

export default galleryRoute;