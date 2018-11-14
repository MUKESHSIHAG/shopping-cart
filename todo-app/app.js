var express = require('express');
var todoController = require('./controller/todoController');

var app = express();

//set template engine
app.set('view-engine','ejs');

//static files
app.use(express.static('./public'));

//fire controller
todoController(app);

//listen to  port
app.listen(process.env.PORT || 5000, function(){
    console.log("its running on 5000");
});
