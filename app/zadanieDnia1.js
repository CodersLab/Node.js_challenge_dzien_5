const express = require('express');
const app = express();

let answer = {};

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/:vote', (req, res) => {
  let {vote} = req.params;
  answer[vote] === undefined ? answer[vote] = 1 : answer[vote]++;
  res.send('Dziękujemy za głos!');
});

app.get('/votes/check', (req, res) => {
  let results = '';
  for (let vote in answer) {
    results += `${vote} : ${answer[vote]}<br>`;
  }
  res.send(results);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
