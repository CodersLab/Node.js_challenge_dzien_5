//Twój kod
const express = require('express');
const app = express();
const path = require('path');

let CACHE = {
  yes: 0,
  no: 0
}

app.use(express.static(path.join(__dirname, 'public/zadanieDnia/')));

app.get('/votes/check', (req, res) => {
  const results = `
    <h1 style="text-align: center">Głosy na tak: ${CACHE.yes} :)</h1>
    <h1 style="text-align: center">Głosy na nie: ${CACHE.no} :(</h1>
  `;  

  res.send(results);
});

app.get('/vote/:vote', (req, res) => {
  const yesno = req.params.vote;
  CACHE[yesno] += 1;

  res.send('<h1 style="text-align: center">"Dziękujemy za głos!</h1>');
});

app.get('/manual/route', (req, res) => {
  console.log(req.headers);
})

app.listen(3000, () => console.log('serwer stoi na porcie 3000'));