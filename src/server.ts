import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
  createImage,
} from "./controllers/planets.js";
import multer from "multer";
import { logIn, signUp } from "./controllers/users.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

dotenv.config();

const app = express();
const PORT = process.env.KEY || 3000;

app.use("/uploads", express.static("uploads"));

app.use(express.json());

app.use(morgan("dev"));

//Planets

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

// Fare l' upload di un file(img)
app.post("/planets/:id/image", upload.single("image"), createImage);

// Users
app.post("/users/login", logIn);
app.post("/users/signup", signUp);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
