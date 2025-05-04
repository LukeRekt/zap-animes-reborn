

function verifyPasswd(req, res, next) {
    //aqui vai a logia da verificacao da senha
    console.log("Senha aprovada com sucesso");
    next();
}

module.exports = {
    verifyPasswd
}