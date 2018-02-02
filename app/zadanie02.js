//Twój kod

const express = require('express');
const app = express();
const style = 'text-align:center; border: 3px solid #000; margin-top: 50px; background-color: #CDCDCD;';
let name;

app.get('/name/set/:imie', (req, res) => {
    name = req.params.imie;
    res.send(`<h1 style='${style}'>${name}<h1>`);
});

app.get('/name/show', (req, res) => { 
    let information = name !== undefined ? `You set name: ${name}` : 'Please set name first';
    res.send(`<h1 style='${style}'>${information}<h1>`);
});

app.get('/name/check', (req, res) => {
    let information = name !== undefined ? 'Name saved' : 'Name not saved';
    res.send(`<h1 style='${style}'>${information}<h1>`);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});