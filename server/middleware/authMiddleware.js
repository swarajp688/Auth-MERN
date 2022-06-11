const jwt = require("jsonwebtoken");
const UserData = require("../Models/user.model");

async function protected (req,res,next){
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if(!token){
        return res.status(403).send("A token is required for authentication");
    }

        try {
            const decode= jwt.verify(token,process.env.TOKEN);
            req.user = await UserData.findById(decode.id).select('-password');
            next();
        }catch(err){
            console.log(err);
            res.status(401).json({err:"unauthorized"});
            throw new Error("unauthorized");
        }
}

module.exports = {protected}