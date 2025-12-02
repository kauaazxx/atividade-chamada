const db = require("../data/connection");

exports.listar = (req, res) => {
    db.query("SELECT * FROM Cliente", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.cadastrar = (req, res) => {
    const { nome, telefone, email } = req.body;

    db.query(
        "INSERT INTO Cliente (nome, telefone, email) VALUES (?,?,?)",
        [nome, telefone, email],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ mensagem: "Cliente cadastrado!" });
        }
    );
};