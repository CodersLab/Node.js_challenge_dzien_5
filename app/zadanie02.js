const express = require('express');
const app = express();
let name = '';
app.get('/name/set/:name', (req,res) =>{
  name = req.params.name;
  res.send('Podane imię to: '+name);
});
app.get('/name/show', (req,res) =>{
  res.send('Podane imię to: '+name);
});
app.get('/name/check', (req, res) =>{
  let text = '';
    if(name.length>0){
    text = 'To jest w Check, i imie to:  '+name;
  } else{
    text = 'Imię nie zostało podane!';
  }
  res.send(text);
});
app.listen(3000, () =>{
  console.log('Uruchomiono serwer na porcie 3000');
})
