import express, { Router } from "express";
import { getUsers } from "../controllers/user.js"


const rotas = express.Router();

rotas.get("/", getUsers);

export default rotas;