//Twój kod
const express = require('express');
const app = express();

var name =""
app.use(express.static('/'));

app.get('/name/set/:imie', (req, res) => { 
    name = req.params.imie;
    res.send('Witaj, ' + name);
});
app.get('/name/show', (req, res) => { 
    res.send('Imię: ' + name);
});


app.get('/name/check', (req, res) => { 
    if(name.length>0){
    res.send('Imię: ' + name)
    }else{
        res.send("nie podano imienia")
    }
});


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});``