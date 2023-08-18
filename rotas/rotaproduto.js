const roteador = require("express").Router();

const produtos = [
    {
        "nome":"nokia 1992",
        "fabricante":"nokia",
        "valor":699.99
    }
    
]

roteador.use ("/",(requisicao, resposta) => {
    resposta.send(

        JSON.stringify(produtos)
    )
});
module.exports = roteador;