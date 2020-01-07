const express = require('express')
const app = express()
const router = express.Router();
const path = require('path');
const port = 8000

app.use(express.static(__dirname + '/public'))

app.use('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
