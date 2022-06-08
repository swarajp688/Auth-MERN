const express = require("express");
const Candidate = require('../models/candidate');


async function showAllCandidate(req,res){
    const candidate = await Candidate.find();
    return res.status(200).json({status:'error',message:'Candidates Found',candidate:candidate});
}

async function addCandidate(req,res){
    const candidate = await Candidate.create(req.body);
    return res.status(200).json({status:'OK',message:'Candidate Created',candidate:candidate});
}

module.exports = {
    showAllCandidate,
    addCandidate
}