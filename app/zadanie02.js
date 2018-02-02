const express = require("express");
const app = express();

let name;
const not_defined = "Imię nie zostało zdefiniowane";

app.get("/set/:name", (req, resp) => {
    name = req.params.name;
    resp.send("Ustawiono imię!");
});

app.get("/name/show", (req, resp) => {
   let responseText = not_defined;
   if (typeof name !== 'undefined') {
       responseText = "Imię to: " + name;
   }
   resp.send(responseText);
});

app.get("/name/check", (req, resp) => {
    if (typeof name === 'undefined') {
        resp.send(not_defined);
    }
    else {
        resp.send("Imię jest ustawione");
    }
});

app.listen(3000);