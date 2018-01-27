const express = require('express');
const app = express();

app.use(express.static('./public/przykladStatyczne/'));

app.get('/manual/route', (req, res) => {
    res.send('To jest odpowiedź zwrócona nie z pliku, a z manualnie ustalonej ścieżki.');
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});