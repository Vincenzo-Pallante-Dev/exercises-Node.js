import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} from "./controllers/planets.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(morgan("dev"));

// Tutti i pianeti
app.get("/planets", getAll);

//Pianeta tramite ID
app.get("/planets/:id", getOneById);

// Creare un pianeta
app.post("/planets", create);

// Aggiornare un pianeta tramite ID
app.put("/planets/:id", updateById);

// Eliminare un pianeta tramite ID
app.delete("/planets/:id", deleteById);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
