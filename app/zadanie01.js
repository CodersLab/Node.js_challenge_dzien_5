const express = require('express');
const app = express();

app.get('/sum/:num1/:num2', (req, res) => {
	res.send(`Wynik: ${Number(req.params.num1)+Number(req.params.num2)}`);
});

app.listen(3000, () => {
	console.log('Serwer uruchomiony na porcie 3000');
});