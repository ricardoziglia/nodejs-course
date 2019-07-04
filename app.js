const express = require('express');
const app     = express();

app.use('/users', (req, res, next) => {
    console.log('middleware users');
    res.send('<h1>/users route response</h1>');
});

app.use('/', (req, res, next) => {
    console.log('middleware default');
    res.send('<h1>Default response</h1>');
});

// Assignment step #2

// app.use('/', (req, res, next) => {
//   console.log('Middleware 1');
//   next();
// });

// app.use('/', (req, res, next) => {
//   console.log('Middleware 2');
//   next();
// });

app.listen(3333);
