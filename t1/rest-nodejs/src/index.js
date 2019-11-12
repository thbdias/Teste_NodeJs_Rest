const express = require('express'); //Importação do express
const bodyParser = require('body-parser') //Importação do body-parser

const app = express(); //Variável app


//Define que a aplicação irá receber objetos do tipo json
app.use(bodyParser.json()); 
//Utilizado para entender parâmetros via URL
app.use(bodyParser.urlencoded({ extended: false })); 

//Importação do controller criado passando a váriavel app adiante
require('./app/controller/crudController')(app); 


app.listen(3000); //Porta que a aplicação ficará ouvindo