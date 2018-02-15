const express = require('express');
const app = express();

app.get('/:num1/:num2', (req, res) => {
    const num1 = req.params.num1;
    const num2 = req.params.num2;
    let sum = parseInt(num1) + parseInt(num2);
    res.send('Suma liczb to ' + sum);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});