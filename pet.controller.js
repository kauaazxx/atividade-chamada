const db = require("../data/connection");

exports.listar = (req, res) => {
    db.query("SELECT * FROM Pet", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.cadastrar = (req, res) => {
    const { nome, especie, raca, id_cliente } = req.body;

    db.query(
        "INSERT INTO Pet (nome, especie, raca, id_cliente) VALUES (?,?,?,?)",
        [nome, especie, raca, id_cliente],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ mensagem: "Pet cadastrado!" });
        }
    );
};