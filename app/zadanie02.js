//Twój kod
const express = require('express');
const app = express();

let CACHE = { NAMES: [] };

app.get('/name/set/:imie', (req, res) => {
  CACHE.NAMES.push(req.params.imie);
  res.send(`<h1 style="text-align: center">Imię "${CACHE.NAMES[CACHE.NAMES.length - 1]}" zapisano do cache aplikacji.</h1>`);
});

app.get('/name/show', (req, res) => {
  const formattedName = CACHE.NAMES.length > 1 ? 'Imiona' : 'Imię';
  res.send(`<h1 style="text-align: center">${formattedName} z cache'a aplikacji:</h1><h2 style="text-align: center">${CACHE.NAMES}</h2>`)
});

app.get('/name/check', (req, res) => {
  const isEmpty = CACHE.NAMES.length !== 0 ? 'Coś tam jest!' : 'Cache jest pusty';
  res.send(`<h1 style="text-align: center">${isEmpty}</h1>`);
});

app.listen(3000, () => console.log('serwer stoi na porcie 3000'));