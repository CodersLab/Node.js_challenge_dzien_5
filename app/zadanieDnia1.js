const express = require('express');
const app = express();

let yes = 0,
  no = 0;

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/yes', (req, res) => {
  yes++;
  res.send('Dziękujemy za głos!');
});

app.get('/vote/no', (req, res) => {
  no++;
  res.send('Dziękujemy za głos!');
});

app.get('/votes/check', (req, res) => {
  res.send(`Za: ${yes}<br>
      Przeciw: ${no}`);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
