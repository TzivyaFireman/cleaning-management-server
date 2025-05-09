import express from "express";
import cors from "cors";
import institutionRouter from "./routes/institutionsRoutes"
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(institutionRouter);
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
