import express, { Application } from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const app: Application = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT ?? 3000;

app.get("/api/character", async (_req, res) => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    const characters = response.data;
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los personajes" });
  }
});
app.listen(PORT, () => {
  console.log(`⚡ Server running on port ${PORT} ⚡`);
});
