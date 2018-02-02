const express = require("express");
const app = express();

app.get("/:number1/:number2", (req, res) => {
    res.send( (parseInt(req.params.number1)+parseInt(req.params.number2)).toString() );
});

app.listen(3000);