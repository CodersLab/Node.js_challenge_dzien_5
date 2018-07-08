const express = require('express');

const app = express();

app.get('/:var1/:var2', (req, res) => { //np. localhost:3000
    const var1 = req.params.var1;
    const var2 = req.params.var2;
    const intvar1 = parseInt(var1);
    const intvar2 = parseInt(var2);
    const sum=intvar1 + intvar2;
    
    res.send(String(sum));
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
