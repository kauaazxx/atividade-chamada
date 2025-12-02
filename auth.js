module.exports = (req, res, next) => {
    console.log("Middleware simples executado");
    next();
};