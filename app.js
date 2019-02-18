const express = require("express");

let app = express();

app.all('*',function(req,res) {
    res.send("这是我配置nginx时，写的一个练习项目");
});
app.listen(8081);