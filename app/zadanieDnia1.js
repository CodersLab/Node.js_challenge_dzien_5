//Twój kod

const express = require('express');
const app = express();
let options = [];

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/:option', (req, res) => {
    let option = req.params.option;

    typeof options[option] === 'undefined' ? options[option] = 1 : options[option]++;
    res.send(`<h1>Thank you for your vote</h1>`);
});

app.get('/votes/check', (req, res) => {
    let voteResults = '';
    for (let option in options) {
        voteResults += `<h1>Votes for ${option}: ${options[option]}<h1></br>`;
    }
    res.send(voteResults);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});