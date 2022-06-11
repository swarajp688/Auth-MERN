const express = require("express");
const {register , login } = require('../controller/userController');
const {showAllCandidate , addCandidate,deleteCandidate,updateCandidateById} = require('../controller/candidateController');
const userRouter = express.Router();
const { protected } = require('../middleware/authMiddleware');

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/get-candidate',protected,showAllCandidate);
//delete candidate
userRouter.post('/add-candidate',protected,addCandidate);
userRouter.post('/delete-candidate',protected,deleteCandidate);
// update
userRouter.post('/update-candidate/:id',protected,updateCandidateById);
module.exports = userRouter;