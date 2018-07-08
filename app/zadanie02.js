const express = require('express');

const app = express();//Twój kod
app.get('/hello/:myname', (req, res) => { //np. localhost:3000/hello/Programist(k)o
    const name = req.params.myname;
    res.send('Witaj, ' + name);
    
});