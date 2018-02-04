express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

app.get('/:a/:b', (req, res) => {
	const wynik = parseInt(req.params.a) + parseInt(req.params.b);
	res.send('Wynik sumowania to: ' + wynik);
});

app.listen(3000, () => {
	console.log('Wystartowalem serwerek na porcie 3000');
});