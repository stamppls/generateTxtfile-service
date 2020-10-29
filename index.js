const expresss = require('express');
const app = expresss();
const bodyParser = require('body-parser');
const fs = require("fs");
const writer = require('./module');

app.use(bodyParser.json());

app.post("/download",(req,res)=>{
    
    var text= writer.execute(req.body);
    res.setHeader('Content-type', "application/octet-stream");
    
    res.setHeader('Content-disposition', 'attachment; filename=file.txt');
    
    res.send(text);
})

app.listen(3001,()=>{
    console.log("server is ready")
})