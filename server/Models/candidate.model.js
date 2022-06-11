const mongoose = require('mongoose');
const CandidateSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    adress:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    dob:{
        type:String,
    },
    state:{
        type:String,
    },
    age:{
        type:Number,
    },
    result:{
        type:String,
    }
},{collection : 'candidate'});
module.exports = mongoose.model('Candidate',CandidateSchema);