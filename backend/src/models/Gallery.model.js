import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    name: { type: String, required: true },
    defaultPath: { type: String, required: true },
    hoverPath: { type: String, required: true }
})

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;