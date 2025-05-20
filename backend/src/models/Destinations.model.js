import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
    destinationTitle: { type: String, required: true },
    description: { type: String, required: true },
    imagePath: { type: String, required: true }
})

const Destination = mongoose.model("Destination", destinationSchema)

export default Destination; 