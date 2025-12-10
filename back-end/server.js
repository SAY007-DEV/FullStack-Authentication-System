import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './Config/Database.js';
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import router from './Routes/AuthRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
// port
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{console.log(`Server is running on port http://localhost:${PORT}`);
})

// Database connection
connectDb();

// Static files
app.use(express.static(path.join(__dirname,'./Public')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./Public/index.html'));
});


// Routes

app.use('/api/auth', router);
