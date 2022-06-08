const mongoose = require('mongoose');
const CandidateSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    dob:{
        type:String,
    },
    result:{
        type:String,
    }
},{collection : 'candidate'});
module.exports = mongoose.model('Candidate',CandidateSchema);