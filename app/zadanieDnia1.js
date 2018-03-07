const express = require('express');
const app = express();
let yesCounter = 0;
let noCounter = 0;
let maybeCounter = 0;
app.use(express.static('./public/zadanieDnia/'));
let pollCounter = ()=> {
        app.get('/vote/:votetype', (req, res) => {
            let votetype = req.params.votetype;
            (votetype === 'yes') ? yesCounter++ : (votetype === 'no')? noCounter++ : maybeCounter++;
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