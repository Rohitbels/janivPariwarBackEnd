const express = require('express');

const userInsert =require('./userInsert');
const userUpdate=require('./userUpdate');

const userView=require('./userView');
var router = express.Router();

router.post('/insert',function(req,res){

  console.log(req.body);
  userInsert(req,res);
});

router.post('/update',function (req,res) {
  console.log(req.body);
  userUpdate(req,res);
});

router.get('/',function(req,res){

userView(req,res);
});

module.exports=router;
