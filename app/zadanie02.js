//Twój kod

const express = require('express');
const app = express();

let name = '';

app.get('/name/set/:imie', (req, res) => {
    name = req.params.imie;
    res.send('Zapamiętałem imię: ' + name);
});

app.get('/name/show', (req, res) => {
    res.send('Zapamiętane imię to: ' + name);
});

app.get('/name/check', (req, res) => {
    if(name.length > 0){
        res.send('Imię ' + name + ' zostało już zapamiętane!');
    } else {
        res.send('Żadne imię nie zostało zapamiętane!');
    }
});


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});