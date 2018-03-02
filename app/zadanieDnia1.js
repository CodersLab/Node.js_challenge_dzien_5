const express = require('express');
const app = express();
let yesCounter = 0;
let noCounter = 0;
let maybeCounter = 0;
app.use(express.static('./public/zadanieDnia/'));
let pollCounter = ()=> {
    app.get('/vote/yes', (req, res) => {
        yesCounter++;
        res.send('Dziękujemy za głos!');
    });
    app.get('/vote/no', (req, res) => {
        noCounter++;
        res.send('Dziękujemy za głos!');
    });
    app.get('/vote/maybe', (req, res) => {
        maybeCounter++;
        res.send('Dziękujemy za głos!');
    });

    app.get('/votes/check', (req, res) => {
        res.send(`'Tak': ${yesCounter} 'Nie': ${noCounter} 'To się okaże': ${maybeCounter}`);
    });
};
pollCounter();


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});