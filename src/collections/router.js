const express= require('express');

var generalDbApi=require('../generalCRUD/generalDbApi');

var router=express.Router();



router.get('/',function(req,res){
    generalDbApi.view("collections",req,res);
  });
  
router.post('/insert',function(req,res){
    generalDbApi.insert("collections",req,res);
});

router.post("/update",function(req,res){
    generalDbApi.update("collections",req,res);
});
module.exports=router;
  