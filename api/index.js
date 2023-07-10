
import express from "express";

import userRoutes from "./routes/users.js";

import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes); // No caminho inicial irá pegar a rota "userRoutes"     

app.listen(8800);