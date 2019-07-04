const express = require('express');
const app = express();

app.use('/', (req, res, next) =>{
    console.log('Generic middleware');
    next(); // goes to next middleware in line (from top to botton).
});

app.use('/add-product', (req, res, next) =>{
    console.log('In add product middleware!');
    res.send('<h1>Add product</h1>');
});

app.use('/', (req, res, next) =>{
    console.log('In another middleware!');
    res.send('<h1>Hello there!</h1>'); //adds some extra setup to the response (header and etc).
});

app.listen(3000);
