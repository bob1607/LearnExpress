var express = require("express");
var app = express();

contacts = ["Bob", "John", "Ringo", "Paul", "George"];

app.get("/", function(request, response){

    response.send("Hello World");

});

app.get("/contacts", function(request, response){
    response.json(contacts);
});




module.exports = app;