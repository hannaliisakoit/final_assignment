const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const todoRouter = require('./routes/todo.routes');
//const dotenv = require('dotenv');
const app = express();

app.use(bodyParser.json());

db.connect((error) => {
    if(error) {
        console.log('connection failed.');
        console.log(error);
    } else {
        console.log('Connection initiated.');
    } 
});

app.use('/todo', todoRouter );

app.listen(3000, () => {
    console.log('Server is running on Port 3000.');
});