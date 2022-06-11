const express = require("express");
const Candidate = require("../Models/candidate.model");

// get candidate data
async function showAllCandidate(req,res){
    try{
        const candidate = await Candidate.find();
        res.status(200).json({status:'OK',message:'Candidate list',candidate:candidate});
    }
    catch(err){
        res.status(400).json({status:'error',message:'Failed to retrieve the Course List:'});
    }
}

// async function showAllCandidate(req,res){
//     console.log("showAllCandidate called")
//     await Candidate.find({},(err, candidate) => {
//         if (!err) {
//             res.status(200).json({status:'OK',message:'Candidate list',candidate:candidate});
//         } else {
//             console.log('Failed to retrieve the Course List: ' + err);
//             res.status(400).json({status:'error',message:'Failed to retrieve the Course List:'});
//         }
//     });
// }

async function addCandidate(req,res){
    const {name , adress , email , dob , state , age , result} = req.body;
    const candidateExists = await Candidate.findOne({email});
    if(candidateExists){
        res.status(400).json({status:'error',message:'Candidate already exists'});
        throw new Error("Candidate already exists");
    }
    const candidate = await Candidate.create({
        name,
        adress,
        email,
        dob,
        state,
        age,
        result
    },(err, candidate) => {
        if(err){
            console.log('Failed to add the candidate: ' + err);
            res.status(400).json({status:'error',message:'Failed to add the candidate:'});
        }
    });
    return res.status(200).json({status:'OK',message:'Candidate Created',candidate:candidate});
}
//delete candidate
async function deleteCandidate(req,res){
    const {email}=req.body;
    try{
        let candidate = await Candidate.find({email});
        if (candidate[0].email == req.body.email){
            candidate[0].remove();
            return res.status(200).json({status:'Ok',message:'Candidate Deleted'});
        }else{
            console.log('Failed to delete the candidate: ' + candidate[0].email);
            return res.status(200).json({status:'error',message:'Failed to delete Candidate'});
    }
    }catch(err){
        console.log(err);
        return res.status(200).json({status:'error',message:err.message});
    }
}
//update candidate by id
async function updateCandidateById(req,res){
    const {name , adress , email , dob , state , age , result} = req.body;
    const candidate = await Candidate.findById(req.params.id);
    if(!candidate){
        return res.status(400).json({status:'error',message:'Candidate not found'});
    }
    const isMailExist = await Candidate.findOne({email:req.body.email});
    if(isMailExist){
        if(isMailExist._id != req.params._id){
        return res.status(400).json({status:'error',message:'Candidate already exists'});
        }
    }
    candidate.name = name;
    candidate.adress = adress;
    candidate.email = email;
    candidate.dob = dob;
    candidate.state = state;
    candidate.age = age;
    candidate.result = result;
    candidate.save();
    return res.status(200).json({status:'OK',message:'Candidate Updated',candidate:candidate});
}


module.exports = {
    showAllCandidate,
    addCandidate,
    deleteCandidate,
    updateCandidateById
}