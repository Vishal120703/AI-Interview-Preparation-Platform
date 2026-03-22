import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import authRouter from "./routers/auth.router.js";
import { connectRedis } from "./config/redis.js";
import cors from "cors"

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// Connect services
connectDB();
await connectRedis();


// Routes
app.use("/api/auth", authRouter);

// Start server
app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});