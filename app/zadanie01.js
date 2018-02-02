const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Podaj 2 liczby w URL');
});

app.get('/:first/:second', (req, res) => {
  const sum = parseInt(req.params.first) + parseInt(req.params.second);
  res.send('Suma ' + req.params.first + ' i ' + req.params.second + ' to: ' + sum);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
