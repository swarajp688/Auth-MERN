const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    }
},{collection : 'user'});
module.exports = mongoose.model('User',UserSchema);