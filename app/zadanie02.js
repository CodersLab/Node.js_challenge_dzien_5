const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('');
});

let names = [];

app.get('/name/set/:imie', (req, res) => {
  names.push(req.params.imie);
  res.send(`Imię ${req.params.imie} dodane.`);
});

app.get('/name/show', (req, res) => {
  res.send('Aktualne imię to: ' + names[names.length-1]);
});

app.get('/name/check/:imie', (req, res) => {  //poprawiona ścieżka
  names.indexOf(req.params.imie) < 0 ?
    res.send(`Imię ${req.params.imie} nie zostało jeszcze zapisane.`) :
    res.send(`Imię ${req.params.imie} zostało już zapisane.`);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
