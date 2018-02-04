express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

let imie;
let flag = false;

app.get('/name/set/:imie', (req, res) => {
	imie = req.params.imie;
	flag = true;
	res.send('Set - Podane imie to: ' + imie);
});

app.get('/name/show', (req, res) => {
	if (flag === true){
		res.send('Show - Podane imie to: ' + imie);
	} else {
		res.send('Nie zdefiniowano jeszcze imienia.')
	}
});

app.get('/name/check', (req, res) => {
	if (flag === false){
		res.send('Imie nie zostalo jeszcze zdefiniowane');
	} else {
		res.send('Check - Podane imie to: ' + imie);
	}		
	
});

app.listen(3000, () => {
	console.log('Wystartowalem serwerek na porcie 3000');
});