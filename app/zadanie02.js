const express = require('express');
const app = express();

let show;

app.get('/name/set/:imie', (req, res) => {
	show = req.params.imie;
	res.send(`Zapisano: ${req.params.imie}`);
});

app.get('/name/show', (req, res) => {
	res.send(`Podane wczsniej imie to: ${show}`)
});

app.get('/name/check', (req, res) => {
	let msg = show ? 'Imie zostalo zapisane prawidlowo!' : 'Imie nie zostalo zapisane!';
	res.send(msg);
})

app.listen(3000, () => {
	console.log('Serwer uruchomiony na porcie 3000');
});