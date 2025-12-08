import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './Config/Database.js';
dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());
// port
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{console.log(`Server is running on port http://localhost:${PORT}`);
})

// Database connection
connectDb();