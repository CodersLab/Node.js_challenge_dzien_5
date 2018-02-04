const express = require('express');
const app = express();

let name = null;

app.get('/name/set/:imie', (req, res) => {
    name = req.params.imie;
    res.send(`name: ${name}`);
});

app.get('/name/show', (req, res) => {
    res.send(`name: ${name}`);
});

app.get('/check', (req, res) => {

        if(name === null){
            res.send(`name not set`);
        } else {
            res.send(`name set to: ${name}`);
        }
    
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});