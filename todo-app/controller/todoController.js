var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://mukeshsihag:mukesh22@ds041218.mlab.com:41218/mukesh')

//create Schema
var todoSchema = new mongoose.Schema({
    item: String
});

//create models
var Todo = mongoose.model('Todo', todoSchema);

//var data = [{item: "mukesh"},{item: "ajay"},{item: "krishna"}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    
    app.get('/todo', function(req, res){
        //get data from mongodb and pass it to view
        Todo.find({}, function(err, data){
            if (err) throw err;
            res.render('todo', {todos: data});
        });
    });
        
    app.post('/todo',urlencodedParser, function(req, res){
        //pass data from view to mongodb
        var newTodo = Todo(req.body).save(function(err, data){
            if (err) throw err;
            res.json(data);
        });
    });
        
    app.delete('/todo/:item', function(req, res){
        //delete the requested item from mongodb
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
            if (err) throw err;
            res.json(data)
        });
    });
};