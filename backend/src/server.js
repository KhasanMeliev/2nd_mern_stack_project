import express from "express";
import productRoute from "./router/product.route.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config({ quiet: true, path: "./.env" });

const app = express();

app.use(express.json());
app.use("/api/products", productRoute);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on PORT:", PORT);
});
