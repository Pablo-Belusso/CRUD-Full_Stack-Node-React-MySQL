import { db } from "../db.js";


// ---------- MÉTODO PARA CONSULTA DE DADOS (Visualizar os registros) ----------------------

export const getUsers = (_, res) => {

    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {

        if (err) return res.json(err); // Se tiver algum erros

        return res.status(200).json(data);

    });
};

// ---------- MÉTODO PARA INSERIR DADOS ----------------------

export const addUser = (req, res) => {
    const q =
      "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";
  
    const values = [
      req.body.nome,
      req.body.email,
      req.body.fone,
      req.body.data_nascimento,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário criado com sucesso.");
    });
  };


// ---------- MÉTODO PARA EDITAR / ATUALIZAR  DADOS ----------------------

  export const updateUser = (req, res) => {
    const q =
      "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";
  
    const values = [
      req.body.nome,
      req.body.email,
      req.body.fone,
      req.body.data_nascimento,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  };