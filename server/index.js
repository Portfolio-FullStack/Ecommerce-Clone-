// IMPORT FROM PACKAGES
const express  = require('express');


//mongoose

const mongoose = require('mongoose');

// IMPORT FROM OTHER FILES

const authRouter = require('./routes/auth');



// INIT

const port = 3000;
const app = express();




// middle ware:
//client -servr --> client

// node js server

app.use(authRouter);

// Connections to mongo database

mongoose.connect().then(()=> {
    console.log('COnnection Sucessfull');
}).catch(e =>{
    console.log(e);
});



// creating an API
// http://<youripadress>/hello-world




// Get PUT POST  DELETE UPDATE




app.get('/hello-world',(req,res)=>{
    res.json({hi:"hello world"});

});



app.listen(port,()=>{

    console.log(`connected at port ${port}` ,'hello');

});








