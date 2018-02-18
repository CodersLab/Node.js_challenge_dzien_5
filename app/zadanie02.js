const express = require('express');
const app = express();
let userName = '';

app.get('/name/set/:imie', (req, res) => {
    userName = req.params.imie;
res.send('Twoje imię to ' + userName);
});

app.get('/name/show', (req, res) => {
    res.send('Zapamiętałem Twoje imię: ' + userName);
});

app.get('/name/check', (req, res) => {
    (userName !=='')? (res.send('Zapamiętałem Twoje imię: ' + userName)) : (res.send('Nie znam Twojego imienia :('));
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});