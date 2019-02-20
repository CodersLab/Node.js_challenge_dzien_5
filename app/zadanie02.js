//Twój kod
const express = require('express');
const app = express();

let name = "";
app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/name/set/:imie', (req, res) => {
    name = req.params.imie
    res.send(`check name on <a href="/name/show">name</a>
    check name on <a href="/name/check">check</a>`)
    
})

app.get('/name/show', (req, res) => {
    res.send(name)
})

app.get('/name/check', (req, res) => {
    name.length === 0 ? 
    res.send('podaj imię') :
    res.send('imię zostało podane')
})








app.listen(3000, () => {
    console.log('działam ma na porcie 3000')
})