//Twój kod
const express = require('express');
const app = express();
let countYes = 0;
let countNo = 0;
app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/yes', (req, res) => {
    countYes += 1;
    res.send(`yes <br>
    <a href="/">Wróć</a>`)
})

app.get('/vote/no', (req, res) => {
    countNo += 1;
    res.send(`no <br>
    <a href="/">Wróć</a>`)
})

app.get('/votes/check', (req, res) => {
    res.send(`Node.js lubią ${countYes}, nie lubią ${countNo} osoby <br>
    <a href="/">Wróć</a>`)
})

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie http://localhost:3000/')
})