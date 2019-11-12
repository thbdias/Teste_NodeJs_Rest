var express = require('express');
var request = require('request');
var app = express();
var port = 8000;

var url = "http://localhost:3000/crud/";

request(url)
.on('response', function(response) {
    console.log("response.statusCode: " + response.statusCode) // <--- Here 200
})
.on("error", function(err){
    console.log("Problem reaching URL: ", err);
 })
.on("finish", function(response) {
    console.log("done");
})
.on("error", function(err){
    console.log("Problem writing file: ", err);
});

app.listen(port, function(){
console.log('running server on ' + port);
});