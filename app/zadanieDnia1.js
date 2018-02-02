const express = require('express');
const app = express();

let answer = {};

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/:vote', (req, res) => {
  answer[req.params.vote] === undefined ? answer[req.params.vote] = 1 : answer[req.params.vote]++;
  res.send('Dziękujemy za głos!');
});

app.get('/votes/check', (req, res) => {
  let results = "";
  for (var vote in answer) {
    results += `${vote} : ${answer[vote]}<br>`;
  }
  res.send(results);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
