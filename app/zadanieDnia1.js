const express = require('express');
const app = express();

app.use(express.static('./public/przykladStatyczne/'));

let voteYes = 0;
let voteNo = 0;

app.get('/vote/yes', (req, res) => {
    voteYes++;
    res.send(`Dziękujemy za głos!`);
});

app.get('/vote/no', (req, res) => {
    voteNo++;
    res.send(`Dziękujemy za głos!`);
});

app.get('/check', (req, res) => {
      res.send(`TAK: ${voteYes}, NIE: ${voteNo}`);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});