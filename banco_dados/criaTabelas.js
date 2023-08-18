const ModeloTabela = require('../banco-dados/ModeloTabelaProdutos')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)