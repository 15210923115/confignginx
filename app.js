const express = require("express");

let app = express();

app.all('*',function(req,res) {
    res.send("I am one project ...");
});
app.listen(8081);