//Twój kod

const express = require('express');
const app = express();

app.get('/:firstnumber/:secondnumber', (req, res) => {

    const firstnumber = parseInt(req.params.firstnumber);
    const secondnumber = parseInt(req.params.secondnumber);
    let result = firstnumber + secondnumber;

    res.send('Wynik to: ' + result);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
