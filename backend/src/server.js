import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./router/product.route.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env", quiet: true });

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/products/", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
