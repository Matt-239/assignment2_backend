const express = require('express');
const userModel = require('../models/Users');
const routes = express.Router();

// get all users
routes.get('/user', async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).send(users)
    }
    catch (err) {
        res.status(500).send(err);
    }

    // res.send({message: "get all users"});
});

// add a user
routes.post('/user/signup', async (req, res) => {
    try{
        const user = new userModel(req.body);
        user.password = req.body.password;
        await user.save();
        res.status(201).send(user);
    }
    catch(err){
        res.status(500).send(err);
    }

    // res.send({message: "add a user"});
});

// login a user
routes.post('/user/login', async (req, res) => {
    try{
        const user = await userModel.findOne({username: req.body.username});
        if(user.password == req.body.password){
            res.status(200).send(user);
        }
        else{
            res.status(401).send("Invalid password");
        }
    }
    catch(err){
        res.status(500).send(err);
    }

    // res.send({message: "login a user"});
});


// delete a user 
routes.delete('/user/:id', async (req, res) => {
    try{
        const user = await userModel.findByIdAndDelete(req.params.id);
        if(!user){
            res.status(404).send("User not found");
        }
        res.status(200).send(user);
    }
    catch(err){
        res.status(500).send(err);
    }

    // res.send({message: "delete a user"});
});

module.exports = routes;