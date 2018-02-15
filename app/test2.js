const express = require('express');
const app = express();

app.use(express.static('./public/przykladStatyczne/'));

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});