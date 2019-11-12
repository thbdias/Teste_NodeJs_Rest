const express = require('express'); //Importação do express

const router = express.Router(); //Variável de rota 


var pessoas = []; //Array estático de pessoas
var idPessoa = 0; //Variável que irá controlar os Ids gerados


// Rota de inserção
router.post('/', (req, res) => {
    const pessoa = { id: ++idPessoa, nome: req.body.nome };
    pessoas.push(pessoa);
    return res.status(201).send({ pessoas });
});


//Exportação do controller. Variável 'app' será passado por parâmetro
module.exports = app => app.use('/crud', router); 