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

// Rota de edição
router.put('/:id', (req, res) => {
    pessoas = pessoas.map(pessoa => {
        if (pessoa.id == req.params.id) pessoa.nome = req.body.nome;
        return pessoa;
    });

    return res.status(200).send({ pessoas });
});

// Rota de exclusão
router.delete('/:id', (req, res) => {
    pessoas = pessoas.filter(pessoa => pessoa.id != req.params.id);

    return res.status(200).send({ pessoas });
});

// Rota para buscar todos
router.get('/', (req, res) => res.status(200).send({ pessoas }));

// Rota buscar por id
router.get('/:id', (req, res) => {
    const pessoa = pessoas.find(pessoa => pessoa.id == req.params.id);

    return res.status(200).send({ pessoa });
});


//Exportação do controller. Variável 'app' será passado por parâmetro
module.exports = app => app.use('/crud', router); 