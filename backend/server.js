import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productR from "./routes/productRoutes.js";

dotenv.config();
const app = express();

app.use(express.json()); // allows us to accept JSON data in req.body

app.use("/api/products",productR);

app.listen(8000, () => {
  connectDB();
  console.log("We started server at port 8000");
});