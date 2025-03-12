import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API en TypeScript !!!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
