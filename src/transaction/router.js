const express = require('express');


var router = express.Router();

var generalDbApi=require('../generalCRUD/generalDbApi');

router.get('/',function(req,res){
    generalDbApi.view("transactions",req,res);
});

router.post('/insert',function(req,res){
    generalDbApi.insert("transactions",req,res);
});

router.post("/update",function(req,res){
    generalDbApi.update("transactions",req,res);
});

module.exports=router;
