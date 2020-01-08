const express = require('express')
const app = express()
const router = express.Router();
const path = require('path');
const port = 8000

app.use(express.static(__dirname + '/public'))

app.get('/home',function(req,res){
    res.sendFile(path.join(__dirname+'/public/homepage.html'));
});

app.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/public/contact.html'));
});

app.get('/features',function(req,res){
    res.sendFile(path.join(__dirname+'/public/features.html'));
});

app.use('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/single_page.html'));
});
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
