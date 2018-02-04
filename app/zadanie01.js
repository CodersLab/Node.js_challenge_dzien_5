const express = require('express');
const app = express();

app.get('/sum/:first/:second', (req,res) => {
  const first = req.params.first;
  const second = req.params.second;
  const sum = parseInt(first) + parseInt(second);

  res.send("Suma to:" + sum);
})

app.listen(3000,() =>{
  console.log('Serwer uruchomiony na porcie 3000');
});
