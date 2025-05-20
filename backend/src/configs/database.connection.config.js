import mongoose from "mongoose";
import 'dotenv/config'

const connectioDB = async () => {
    try {
        mongoose.connection.on("connected", () => { console.log('Database connected successfully') })
        mongoose.connection.on("error", (err) => { console.log('Database connection error', err) })
        mongoose.connection.once("disconnected", () => { console.log('Database disconnected') })

        await mongoose.connect(process.env.MONGODB_URI, { dbName: "demo-database" })

    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectioDB;