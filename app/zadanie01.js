const express = require('express');
const app = express();

app.get('/:number1/:number2', (req, res) => {
    let sum = Number.parseInt(req.params.number1) + Number.parseInt(req.params.number1)
    res.send(`suma: ${sum}`);
});


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
