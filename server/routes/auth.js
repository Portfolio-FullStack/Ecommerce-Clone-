const express = require("express");

const  authRouter = express.Router();


authRouter.post('/api/signup',(req,res)=>{


    //  get data  from the client 
    // post that  data to database 
    // return data to  to user

    console.log(req.body)



   
});

module.exports = authRouter;