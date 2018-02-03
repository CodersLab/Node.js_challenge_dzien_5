//Twój kod
const express = require('express');
const app = express();

app.use(express.static('/'));

app.get('/:number1/:number2', (req, res) => { 
    const number1 = req.params.number1;
    const number2 = req.params.number2;
    res.send(`Suma ${number1} i ${number2} to: ` + (parseInt(number1)+parseInt(number2)));
});
app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});