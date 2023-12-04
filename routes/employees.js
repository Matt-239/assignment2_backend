const express = require('express');
const EmployeeModel = require('../models/Employee');
const routes = express.Router();

// get all employees
routes.get('/emp/employees', async (req, res) => {
    try {
        const employees = await EmployeeModel.find({});
        res.status(200).send(employees)
    }
    catch (err) {
        res.status(500).send(err);
    }

});

// add an employee
routes.post('/emp/employees', async (req, res) => {
    try{
        const employee = new EmployeeModel(req.body);
        await employee.save();
        res.status(201).send(employee);
    }
    catch(err){
        res.status(500).send(err);
    }

});

// get an employee by id
routes.get('/emp/employees/:id', async (req, res) => {
    try{
        const employee = await EmployeeModel.findById(req.params.id);
        res.status(200).send(employee);
    }
    catch(err){
        res.status(500).send(err);
    }
});

// update an employee
routes.put('/emp/employees/:id', async (req, res) => {
    try{
        const employee = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body);
        await employee.save();
        res.status(200).send(employee);
    }
    catch(err){
        res.status(500).send(err);
    }
});

// delete an employee using a query parameter of id
routes.delete('/emp/employees', async (req, res) => {
    try{
        const employee = await EmployeeModel.findByIdAndDelete(req.query.id);
        if(!employee){
            res.status(404).send("Employee not found");
        }
        res.status(200).send(employee);
    }
    catch(err){
        res.status(500).send(err);
    }
});

module.exports = routes;