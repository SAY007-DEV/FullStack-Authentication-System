import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.Mongo_URL)
        console.log("Database connected successfully");
        
    } catch (error) {
        console.log("Database connection failed", error);
    }
}

export default connectDb;