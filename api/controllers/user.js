import { db } from "../db.js";

export const getUsers = (_, res) => {

    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {

        if (err) return res.json(err); // Se tiver algum erros

        return res.status(200).json(data);

    });
};