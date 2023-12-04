const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 100,
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 50,
    },
    email: {
        type: String,
        unique: true, 
        maxlength: 50,
    },
    gender: {
        type: String,
        enum:['Male', 'Female', 'Other'],
        maxlength: 25,
    },
    salary: {
        type: Number,
        required: true,
    },
});

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);
module.exports = EmployeeModel;