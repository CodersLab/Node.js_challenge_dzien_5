//Twój kod
const express = require('express');
const app = express()

app.get('/:numberOne/:numberTwo', (req, res) => {
    const numberOne =Number(req.params.numberOne);
    const numberTwo = Number(req.params.numberTwo);
    res.send(`${numberOne}+${numberTwo}=${numberOne+numberTwo}`)
})

app.listen(3000, () => {
    console.log('działam tam gdzie zwykle;)')
})
