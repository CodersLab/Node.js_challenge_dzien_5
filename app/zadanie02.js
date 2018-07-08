const express = require('express');

const app = express();//Twój kod
var imie = null;

app.get('/name/set/:imie', (req, res) => { //np. localhost:3000/hello/Programist(k)o
    imie = req.params.imie;
    //res.send('Witaj, ' + imie);

});

app.get('/name/show', (req, res) => { //np. localhost:3000/hello/Programist(k)o
    res.send('Witaj, ' + imie);

});
app.get('/name/check', (req, res) => { //np. localhost:3000/hello/Programist(k)o
    if (imie==null){
    res.send('Imie nie bylo podane ');
}
    else  {
        res.send('Imie zostalo podane');
    }

});
app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});