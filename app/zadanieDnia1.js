express = require('express');
const app = express();

app.use(express.static('./public/zadanieDnia/'));

let yes = 0;
let no = 0;

app.get('/vote/yes', (req, res) => {
	yes++;
	res.send('Cieszy mnie Twoja pozytywna opinia.');
});

app.get('/vote/no', (req, res) => {
	no++;
	res.send('Szkoda, dzięki za głos.');
});

app.get('/votes/check', (req, res) => {
	res.send('Wyniki głosowanie - ' + yes + ' głosowało na tak, a ' + no + ' głosowało na nie.');
});

app.listen(3000, () => {
	console.log('Wystartowalem serwerek na porcie 3000');
});