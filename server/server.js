import dotenv from 'dotenv';
dotenv.config({ path: ".env" });
import express from "express";
import connectDB from "./config/db.js";
import authRouter from "./routers/auth.router.js";
import { connectRedis } from "./config/redis.js";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect services
connectDB();
// await connectRedis();


// Routes
app.use("/", authRouter);

// Start server
app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});