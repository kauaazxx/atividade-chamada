const db = require("../data/connection");

exports.listar = (req, res) => {
    db.query("SELECT * FROM Servico", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.cadastrar = (req, res) => {
    const { nome, preco } = req.body;

    db.query(
        "INSERT INTO Servico (nome, preco) VALUES (?,?)",
        [nome, preco],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ mensagem: "Serviço cadastrado!" });
        }
    );
};