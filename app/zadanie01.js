//Twój kod
const express = require('express');
const app = express();

app.get('/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  res.send(`${num1} + ${num2} = ${num1 + num2}`);
});

app.listen(3000, () => {
  console.log('serwer stoi na porcie 3000');
});