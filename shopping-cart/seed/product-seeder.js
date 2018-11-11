var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic video Game',
        description: 'Awesome game!!!!',
        price: '10'
    }),
    new Product({
        imagePath: 'https://i.pinimg.com/originals/7a/32/73/7a32739725bba4eabf05dc444b5d8353.jpg',
        title: 'A warrior',
        description: 'Awesome warrior!!!!',
        price: '15'
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjT4Bav70A9vU48rP5VrphXh82gv37tk53qPRlab-q_RDYHohAXg',
        title: 'hacker',
        description: 'Awesome hacker!!!!',
        price: '20'
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMttu9AcoA4Zvu1uEw3fcUqSiY2BCMlZ_-9H4etaiw41bpRDUnLA',
        title: 'black hat',
        description: 'Black hat hacker!!!!',
        price: '30'
    }),
    new Product({
        imagePath: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/is7nl4qcHb9A/v0/1200x-1.jpg',
        title: 'Army',
        description: 'North Korea hacker army!!!!',
        price: '50'
    }),
];

var done = 0;
for(var i=0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done == products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}