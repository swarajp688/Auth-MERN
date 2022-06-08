const express = require("express");
const UserData = require('../Models/user.model');


async function register(req,res){
        await UserData.findOne({email:req.body.email}, async (err,user)=>{
            if(err){
                console.log('error in siging up'); 
                return res.status(400).json({error:'error',message:'error in siging up'});
        }
        if(user){
            return res.status(400).json({error:'error',message:'email already exists'});
        }else {
            UserData.create({
                name: req.body.userName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            }, function(err, user){
                if(err){
                    console.log(err,"error in signing up");
                    return res.json({status:'error',error:"Error in signing up"});
                }
                console.log(user,"user created");
                return res.status(200).json({status:'OK', message:'User Created'})
            })
        }
        });
}

async function login(req,res){
    const user = await UserData.findOne({email:req.body.email});
    if(user){
        console.log(user.password);
        if(user.password === req.body.password){
        console.log(user);
        return res.status(200).json({status:'OK',message:'User Found',user:user});
        }else{
            return res.status(400).json({error:'error',message:'Invalid Password'});
        }
    }
}

module.exports = {
    register,
    login
}