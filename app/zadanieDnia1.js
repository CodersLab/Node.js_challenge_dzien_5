//Twój kod
const express = require('express');
const app = express();

var counterYes = 0;
var counterNo = 0;
var counterMaybe=0;
app.use(express.static('./public/zadanieDnia/'));

app.get(`/vote/:selected`, (req, res) => { //np. localhost:3000/hello/Programist(k)o
    const vote = req.params.selected;
    res.send('Zagłosowano ' + vote);
    if(vote!==null){
        if(vote==='yes'){
            counterYes++
        }else if(vote==='no'){
            counterNo++
        }else{
            counterMaybe++
        }
    }
    
});
app.get('/votes/check', (req,res)=>{
    res.send(`Zagłosowano: ${counterYes} głosów na tak; ${counterNo} głosów na nie; ${counterMaybe} głosów na Nie wiem`)
})

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});