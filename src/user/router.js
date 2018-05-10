const express = require('express');


var router = express.Router();

var generalDbApi=require('../generalCRUD/generalDbApi');

router.get('/',function(req,res){
    generalDbApi.view("user",req,res);
});

router.post('/insert',function(req,res){
    generalDbApi.insert("user",req,res);
});

router.post("/update",function(req,res){
    generalDbApi.update("user",req,res);
});

module.exports=router;
