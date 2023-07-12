
import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router()


// --- ROTAS -------------

router.get("/", getUsers)   // CONSULTA

router.post("/", addUser)   // INSERÇÃO

router.put("/:id", updateUser) // EDIÇÃO

router.delete("/:id", deleteUser) // DELETAR

export default router