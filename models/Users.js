const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100,
    },

    email: {
        type: String,
        unique: true,
        maxlength: 50,
    },

    password: {
        type: String,
        maxlength: 50,
    },
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;