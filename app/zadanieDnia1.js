//Twój kod

const express = require('express');
const app = express();

app.use(express.static('./public/zadanieDnia/'));

let yes = 0;
let no = 0;
let maybe = 0;

app.get('/vote/yes', (req, res) => {
    yes++
    res.send('Ilość głosów: ' + yes);
});

app.get('/vote/no', (req, res) => {
    no++
    res.send('Ilość głosów: ' + no);
});

app.get('/votes/check', (req, res) => {
    res.send('Głosy na TAK: ' + yes +', a głosy na NIE: ' + no);
});

// app.get('/vote/:option', (req, res) => {
//     const option  = req.param.option;
//     if(option === 'yes'){
//         yes++
//         res.send('Ilość głosów: ' + yes);
//     } else if(option === 'no'){
//         no++
//         res.send('Ilość głosów: ' + no);
//     } else if(option === 'maybe'){
//         maybe++
//         res.send('Ilość głosów: ' + maybe);
//     }
// });
//
// app.get('/votes/check', (req, res) => {
//      res.send('Głosy na TAK: ' + yes +', głosy na NIE: ' + no, ', a głosy MOŻE: ' + maybe);
// });

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});