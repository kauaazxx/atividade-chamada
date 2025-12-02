const db = require("../data/connection");

exports.listar = (req, res) => {
    db.query("SELECT * FROM Atendimento", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.cadastrar = (req, res) => {
    const { id_pet, id_servico, data_atendimento, valor_cobrado } = req.body;

    db.query(
        "INSERT INTO Atendimento (id_pet, id_servico, data_atendimento, valor_cobrado) VALUES (?,?,?,?)",
        [id_pet, id_servico, data_atendimento, valor_cobrado],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ mensagem: "Atendimento cadastrado!" });
        }
    );
};