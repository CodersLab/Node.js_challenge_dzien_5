const express = require('express');
const app = express();

let votes = {};

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/:option', (req, res) => {
  let {option} = req.params;
  votes[option] = votes[option] + 1 || 1;
  res.send('Dziękujemy za głos!');
});

app.get('/votes/check', (req, res) => {
  let results = "";
  for (let option in votes) {
    results += `${option} : ${votes[option]}<br>`;
  }
  res.send(results);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
