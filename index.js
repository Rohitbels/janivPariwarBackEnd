const express = require('express');
const bodyParser =require('body-parser');
const userRouter=require('./src/user/router');
const transactionRouter=require('./src/transaction/router');
const collectionsRouter=require('./src/collections/router');
var app=express();
console.log(typeof userRouter)
app.use(bodyParser.json());

app.use('/user',userRouter);
app.use('/transactions',transactionRouter);
app.use("/collections",collectionsRouter);
app.listen(3000,function(){

    console.log("we are here");
})
