const express = require("express");
const check = require("./lib/checker.js");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.render("index.pug");
});

app.post("/check/:url(*)", (req, res) => {
    check(req.params.url).then(result => {
        res.json(result);
    });
});

app.listen(3000);
