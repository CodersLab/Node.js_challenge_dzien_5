const express = require('express');
const app = express();
let yes = 0, no = 0, maybe = 0;
const thx =  'Dziękujemy za odanie głosu!';
app.use(express.static('./public/zadanieDnia/'));

app.get('/',(req,res)=>{
  console.log("Someone's at the door!");
});
app.get('/vote/:vote',(req,res) =>{
  if(req.params.vote == 'yes'){
      yes++;
      res.send(thx);
  } else if (req.params.vote == 'no') {
      no++;
      res.send(thx);
  } else if (req.params.vote == "maybe") {
      maybe++;
      res.send(thx);
  }
});
app.get('/votes/check',(req,res) =>{
  res.send(
    'Głosy na TAK: ' + yes +'<br/>'+
    'Głosy na NIE: ' + no +'<br/>'+
    'Głosy na MAYBE: ' + maybe
  );
})
app.listen(3000, () => {
  console.log('Serwer został uruchomiony na porcie 3000!');
});
