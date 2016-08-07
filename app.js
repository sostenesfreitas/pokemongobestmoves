'use strict';
require('./config.js')
const express = require('express');
const app = express();
const Schema = require('./schema.js');
const Model = require('./model.js')(Schema, 'bestmoves');
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/moves', (req, res)=> {
    Model.find((err, data) => {
        if(err) console.log('erro::', err);
        res.json(data);
    });
});

//app.get('/test', (req, res) => {
//Model.create(poke, (err, data) => {
//if (err) return console.log('erro', err);
//return console.log('cadastrou: ', data);
//});
//});

app.listen(3000, function () {
      console.log('Servidor rodando em locahost:3000');
});
