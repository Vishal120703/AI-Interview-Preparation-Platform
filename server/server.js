import dotenv from 'dotenv'
dotenv.config({ path: ".env" });
import express from "express";
import connectDB from "./config/db.js";
import authRouter from "./routers/auth.router.js"

const app = express();
const port = process.env.PORT||5000;

connectDB();

app.use("/",authRouter);

app.listen(port, () => {
    console.log(`The server is running on port : ${port}`);
});