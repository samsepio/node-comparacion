const mongoose=require('mongoose');
const bcrypt=require('bcrypt-nodejs');
const Schema=mongoose.Schema;

const userSchema = Schema({
    user:{type: String},
    password:{type: String},
    email:{type: String},
    name:{type: String},
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: { type: Number},
    created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('users',userSchema);