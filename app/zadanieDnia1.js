const express = require('express');
const app = express();

let voteYes = 0;
let voteNo = 0;
let voteMaybe = 0;

app.use(express.static('./public/zadanieDnia/'));

app.get('/', (req, res) => {
	res.send(`Ankieta`);
});

app.get('/vote/:vote', (res, req) => {
	switch(res.params.vote) {
		case 'yes':
			voteYes++;
			break;
		case 'no':
			voteNo++;
			break;
		case 'maybe':
			voteMaybe++;
			break;
	}
	req.send('Zapisano!');
});

app.get('/votes/check', (req, res) => {
	res.send(`Yes: ${voteYes}, No: ${voteNo}, Maybe: ${voteMaybe}`);
})

app.listen(3000, () => {
	console.log('Serwer uruchomiony na porcie 3000');
});