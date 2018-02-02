const express = require("express");
const app = express();

app.use(express.static('./public/zadanieDnia/'));

let answers = [];

app.get("/vote/:answer", (req, resp) => {
    const answer = req.params.answer;
    if (typeof answers[answer] === 'undefined') {
        answers[answer] = 1;
    }
    else {
        answers[answer]++;
    }

    resp.send("Dziekujemy za głos na " + answer + ". Aktualnie posiada on: " + answers[answer] + " głosów.");
});

app.get("/votes/check", (req, resp) => {
    let answer = "Wyniki ankiety: <ul>";

    for (let index in answers) {
        if (answers.hasOwnProperty(index)) {
            answer += "<li>" + index + " - głosów " + answers[index] + "</li>"
        }
    }

    answer += "</ul>";

    resp.send(answer);
});

app.listen(3000);