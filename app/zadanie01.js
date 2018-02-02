//Twój kod

const express = require('express');
const app = express();

app.get('/numbers/:number1/:number2', (req, res) => {
    let number1 = parseInt(req.params.number1);
    let number2 = parseInt(req.params.number2);
    let sum = number1 + number2;
    res.send(`<h1 style='text-align:center; border: 3px solid #000; margin-top: 50px; background-color: #CDCDCD;'>${number1} + ${number2} = ${sum}<h1>`);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});