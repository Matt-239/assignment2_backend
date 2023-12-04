const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const employeeRouter = require('./routes/employees');
const bodyParser = require('body-parser');


var app = express();
const SERVER_PORT = 8089;

app.use(express.json());
app.use(express.urlencoded());

const dbURI = 'mongodb+srv://mprice239:8511*Mongo@cluster0.cbbhvr6.mongodb.net/?retryWrites=true&w=majority';
 
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

const db = mongoose.connection;
db.on('open', () => {
    console.log('Mongoose is connected');
});
db.on('error', (error) => {
    console.log(error);
});

app.use('/api/v1', userRouter);
app.use('/api/v1', employeeRouter);

app.route('/').get((req, res) => {
    res.send('<h1>Assignment 1</h1>');
});

app.listen(SERVER_PORT, () => {
    console.log(`Server started at http://localhost:${SERVER_PORT}`);
});