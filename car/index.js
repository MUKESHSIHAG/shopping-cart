var express = require('express');

var app = express();


//set template engine
app.set('view-engine','ejs');

//static files
app.use(express.static('./public'));

app.use(process.env.port || 4000, function(){
    console.log('runnning on 4000');
});