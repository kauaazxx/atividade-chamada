const express = require("express");
const controller = require("../controllers/cliente.controller");
const router = express.Router();

router.get("/", controller.listar);
router.post("/", controller.cadastrar);

module.exports = router;