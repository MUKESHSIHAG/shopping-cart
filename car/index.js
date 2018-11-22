var express = require("express");
var bodyParser = require('body-parser');

var app = express();

var products = [
    {
        id: 1,
        name: 'mukesh'
    },
    {
        id: 2,
        name: 'Ajay'
    }
]

var currentId = 2;

var PORT = process.env.PORT || 4000;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(function(req,res,next){
//     res.header('Access-Control-Allow-Origin',"*");
//     res.header('Access-Control-Allow-Method',"PUT,POST,DELETE,UPDATE");
//     res.header('Access-Control-Allow-Headers',"Content-Type");
// });

app.get('/products', (req,res) => {
    res.send({products: products});
});

app.post('/products', (req,res) => {
    var productName = String(req.body.name);
    currentId++;
    products.push({
        id: currentId,
        name: productName
    });
    res.send('successfully created');
});


app.put('/products/:id',function(req,res){
    var id = req.params.id;
    var newName = req.body.newName;

    var found = false;

    products.forEach(function(product,index){
        if(!found && product.id === Number(id)){
            product.name = newName;
        }
    });
    res.send('name is successfully updated');
});

app.delete('/products/:id',function(req,res){
    var id = req.params.id;
    var found = false;

    products.forEach(function(product,index){
        if(!found && product.id === Number(id)){
            products.splice(index,1);
            currentId = currentId - 1;
        }
    });
    res.send('name is successfully deleted');
});

app.listen(PORT, function(){
    console.log("running on "+PORT);
});