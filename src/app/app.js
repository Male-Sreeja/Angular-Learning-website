var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/learnverse");
var nameSchema = new mongoose.Schema({
    sname: String,
    email: String,
    password : String
});
var User = mongoose.model("userdetails", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/sample.html");
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Registered Sucessfully");
        })
        .catch(err => {
            res.status(400).send("Failed to Register...Pls try again");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});